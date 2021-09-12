import{p as t,a,o as e,c as s,b as o,d as i,t as n,F as l,r as c,e as r,f as d,g as v,w as u,v as f,h as p}from"./vendor.3d04a23f.js";!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver((t=>{for(const e of t)if("childList"===e.type)for(const t of e.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&a(t)})).observe(document,{childList:!0,subtree:!0})}function a(t){if(t.ep)return;t.ep=!0;const a=function(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?a.credentials="include":"anonymous"===t.crossorigin?a.credentials="omit":a.credentials="same-origin",a}(t);fetch(t.href,a)}}();const h={};t("data-v-5c068514");const m=[o("div",{class:"items"},[o("a",{href:"#PROJECTS"},"Projects"),o("a",{href:"#SKILLS"},"Skills"),o("a",{href:"#CONTACT"},"Contact Me")],-1)];a(),h.render=function(t,a){return e(),s("header",null,m)},h.__scopeId="data-v-5c068514";const b={};t("data-v-370a6dd7");const g={class:"hero"},y=[o("h1",null,[i(" Hi, I am "),o("span",{style:{color:"var(--clr-primary)"}},"Mario De Luca.")],-1),o("h2",null,"A Full Stack Developer",-1),o("p",{style:{"font-size":"1.2rem !important"}},[i(" Hi, I am a developer one of those with passion and who love to put themselves to the limit of what they know going even further to learn new things. Now I am attending the Federico II University of Naples, Italy (NA)."),o("br"),o("br"),i(" I am self-taught, I have created several apps, below are some of my projects and at the bottom of everything also my github profile. "),o("br"),o("br"),i("For any information or request please contact me at the email address below! ")],-1),o("a",{href:"#CONTACT"},"Contact Me",-1)];a(),b.render=function(t,a){return e(),s("div",g,y)},b.__scopeId="data-v-370a6dd7";t("data-v-6a4d123e");const k={class:"project-item"},S={class:"content"},w=["href"];a();const C={props:{content:Object},setup(t){const a=t;return(t,i)=>(e(),s("div",k,[o("div",S,[o("h3",null,n(a.content.title),1),o("p",null,n(a.content.desc),1)]),o("a",{href:a.content.url,target:"__blank"},"Go to the Project",8,w)]))},__scopeId:"data-v-6a4d123e"};t("data-v-d0285268");const I=o("h1",{class:"section-title",id:"PROJECTS"},"PROJECTS",-1),T={class:"project-list"};a();const _={setup(t){const a=[{title:"Todo App",desc:"This is a very simple todo app built with Vuejs",url:"https://macro21kgb-notes.surge.sh"},{title:"Pricefy",desc:"Get the price of a game in a very easy and fast way (3 online vendors supported: Kinguin, G2A, Instant-Gaming)",url:"https://macro21kgb-pricefy.surge.sh"},{title:"Muchkin Counter App",desc:"Player and life counter for the board game Munchkin, built with Svelte",url:"https://macro21kgb.github.io/Munchkin-Counter/"}];return(t,i)=>(e(),s("section",null,[I,o("div",T,[(e(),s(l,null,c(a,(t=>r(C,{content:t},null,8,["content"]))),64))])]))},__scopeId:"data-v-d0285268"};const L={};t("data-v-6f1ab70c");const N=[d('<h1 class="section-title" id="SKILLS" data-v-6f1ab70c>SKILLS</h1><div class="skill-list" data-v-6f1ab70c><div class="skill" data-v-6f1ab70c>VueJs</div><div class="skill" data-v-6f1ab70c>HTML + CSS + JS</div><div class="skill" data-v-6f1ab70c>Svelte</div><div class="skill" data-v-6f1ab70c>NodeJS</div><div class="skill" data-v-6f1ab70c>CMS</div><div class="skill" data-v-6f1ab70c>Typescript</div><div class="skill" data-v-6f1ab70c>SQL/NO-SQL Databases</div><div class="skill" data-v-6f1ab70c>PHP</div><div class="skill" data-v-6f1ab70c>Bootstrap</div><div class="skill" data-v-6f1ab70c>TailWindCSS</div><div class="skill" data-v-6f1ab70c>C/C+/C#</div></div>',2)];a(),L.render=function(t,a){return e(),s("section",null,N)},L.__scopeId="data-v-6f1ab70c";const A={};t("data-v-2364cadf");const M=d('<h1 class="section-title" id="CONTACT" data-v-2364cadf>CONTACT</h1><div class="contact" data-v-2364cadf><span data-v-2364cadf>Email: </span><code style="font-weight:bold;font-size:1.2rem;" data-v-2364cadf>mariodeluca2406@gmail.com</code><p data-v-2364cadf>See also:</p><a href="http://github.com/macro21KGB" target="_blank" data-v-2364cadf><svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle" data-v-2364cadf><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" data-v-2364cadf></path></svg></a></div>',2);a(),A.render=function(t,a){return M},A.__scopeId="data-v-2364cadf";const O={class:"container"},P={class:"container"},j=o("br",null,null,-1),J=o("br",null,null,-1),K=o("br",null,null,-1);p({setup(t){const a=v(!1);function i(){window.scrollTo(0,0)}return window.onscroll=()=>{window.scrollY>500?a.value=!0:a.value=!1},(t,n)=>(e(),s(l,null,[r(h),o("div",O,[r(b)]),r(_),o("div",P,[r(L),r(A)]),j,J,K,u(o("div",{id:"scroll-top",onClick:i},"⬆",512),[[f,a.value]])],64))}}).mount("#app");
