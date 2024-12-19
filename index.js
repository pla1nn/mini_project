(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.getElementById("all-button"),a=document.getElementById("movies_container");d.addEventListener("click",m);const l="http://localhost:3000";async function u(){const o=await fetch(`${l}/movies`);if(!o.ok)throw new Error("failed to fetch");return await o.json()}async function m(){try{const o=await u();f(o)}catch{console.error("failed to render")}}function f(o){const n=o.map(({image:r,title:s,genre:e,year:t,id:i})=>`<li class="movies_item">
  <div class="">
      <img src="${r}" alt="${s}" class="movies_image">
      <h2 class="movies_title"><b>Title:</b>${s}</h2>
      <p class="movies_genre"><b>genre:</b>${e}</p>
      <p class="movies_year"><b>year:</b>${t}</p>
  </div>
  <div class="">
      <button type="button" class="movies_item_button" id="editBtn">edit</button>
      <button type="button" class="movies_item_button" id="${i}">delete</button>
  </div>
</li>`).join("");a.insertAdjacentHTML("beforeend",n)}const p="http://localhost:3000",h=document.getElementById("form");h.addEventListener("submit",y);function v(o){const n={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`${p}/movies`,n).then(r=>{if(!r.ok)throw new Error("failed to fetch");return r.json()})}function y(o){const n=new FormData(o.currentTarget),r={};n.forEach((s,e)=>{r[e]=s}),v(r).then(()=>{alert("movie added")}).catch(s=>{console.error("failed to add")})}const b=document.getElementById("add-button"),g=document.getElementById("close-modal-btn"),E=document.getElementById("modal");b.addEventListener("click",c);g.addEventListener("click",c);function c(){E.classList.toggle("is-hidden")}
//# sourceMappingURL=index.js.map
