"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const js = fs.readFileSync("app.js", "utf8");
const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("styles.css", "utf8");
const config = JSON.parse(fs.readFileSync("vercel.json", "utf8"));
const staticRoutes = [
  "/", "/mentorship", "/case", "/about", "/blog", "/contact",
  "/book-a-call", "/service", "/link-in-bio", "/thank-you",
  "/legal-pages/privacy-policy", "/legal-pages/terms-conditions"
];
const cases = [
  "maya.makes.bread","theo.fitlab","studio.nora","jess.copywrites","danny.cuts","lea.paints"
].map(s => "/case/" + s);
const posts = [
  "the-3-second-rule-why-reels-lose-viewers-before-the-hook",
  "how-to-sell-in-the-dms-without-sounding-like-a-bot",
  "niche-down-without-boxing-yourself-in-the-3-pillar-method",
  "the-save-worthy-carousel-a-7-slide-structure-that-gets-bookmarked",
  "the-5-frame-story-sequence-i-use-to-sell-every-week",
  "faceless-reels-that-still-build-trust-8-formats",
  "how-to-pitch-a-collab-when-your-account-is-small"
].map(s=>"/blog/"+s);
const routes = [...staticRoutes,...cases,...posts];
const script = new vm.Script(js, {filename:"app.js"});
const render = (pathname) => {
 const root={innerHTML:""};
 const document={
   title:"",
   getElementById:(id)=>id==="app"?root:null,
   querySelectorAll:()=>[],
   querySelector:()=>null
 };
 const context={document,location:{pathname},window:{},matchMedia:()=>({matches:true})};
 script.runInNewContext(context,{timeout:2000});
 return {html:root.innerHTML,title:document.title};
};
test("source code parses and HTML shell refers to existing assets", ()=>{
 assert.ok(html.includes('src="/app.js"'));
 assert.ok(html.includes('href="/styles.css"'));
 assert.ok(fs.existsSync("app.js"));
 assert.ok(fs.existsSync("styles.css"));
});
test("all 25 observed routes render content",()=>{
 assert.equal(routes.length,25);
 for(const p of routes){
   const out=render(p);
   assert.match(out.html,/<main id="main">/,p);
   assert.match(out.html,/<\/footer>/,p);
   assert.doesNotMatch(out.html,/Page not <span class="accent">found/,p);
   assert.ok(out.html.length>400,p);
 }
});
test("unknown routes render a 404",()=>{
 assert.match(render("/this-does-not-exist").html,/Page not <span class="accent">found/);
});
test("internal links resolve to observed routes or on-page sections",()=>{
 for(const p of routes){
  const content=render(p).html;
  const links=[...content.matchAll(/href="([^"]+)"/g)].map(m=>m[1]);
  for(const h of links){
   if(h.startsWith("#")) continue;
   if(!h.startsWith("/")) continue;
   const clean=h.split("#")[0].split("?")[0]||"/";
   assert.ok(routes.includes(clean),"unmapped "+h+" in "+p);
  }
 }
});
test("forms never fabricate delivery without a configured endpoint",()=>{
 assert.match(js,/GROWTH_FORM_ENDPOINT/);
 assert.match(js,/r\.ok/);
 assert.match(js,/Submission unavailable/);
});
test("noindex is retained until production acceptance",()=>{
 assert.match(html,/noindex, nofollow/);
 assert.ok(config.headers?.some(h=>h.headers?.some(x=>x.key==="X-Robots-Tag"&&x.value.includes("noindex"))));
 assert.equal(config.rewrites?.[0]?.destination,"/index.html");
});
test("reduced-motion styling exists",()=>{
 assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
});
