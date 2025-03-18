import{i as u,a as g,S as y}from"./assets/vendor-DsdExPLz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();u.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});async function m(n,o=1,a=20){const t="https://pixabay.com/api/?key="+"49253518-6fbcd3e4502fdc6eae88c44f3"+"&q="+encodeURIComponent(n)+"&image_type=photo&orientation=horizontal&safesearch=true&page="+o+"&per_page="+a;try{if(n=="")throw new Error("Please enter something!");const r=await g.get(t);if(r.data.hits==0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");return[...r.data.hits]}catch(r){u.error({iconUrl:"img/error.svg",message:r.message})}}let p=new y(".gallery a");function f(n,o){let a=n.map(s=>`
      <li>
        <a href="${s.largeImageURL}"><img src="${s.webformatURL}" alt="${s.tags}" width="360" height="200" /></a>
        <table class="caption">
          <thead>
            <tr>
              <th>Likes</th>
              <th>Views</th>
              <th>Comments</th>
              <th>Downloads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${s.likes}</td>
              <td>${s.views}</td>
              <td>${s.comments}</td>
              <td>${s.downloads}</td>
            </tr>
          </tbody>
        </table>
      </li>`).join("");o.insertAdjacentHTML("beforeend",a),p.refresh()}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loading-text"),moreImgBtn:document.getElementById("moreImgBtn"),request:document.querySelector(".form input"),submitBtn:document.querySelector(".form button")};e.form.addEventListener("submit",b);e.moreImgBtn.addEventListener("click",L);let d,i,c;async function b(n){n.preventDefault(),e.request.setAttribute("readonly",!0),e.submitBtn.disabled=!0,e.loader.classList.remove("hidden"),d=1,i=20,c=e.request.value.trim();const o=await m(c,d,i);e.request.removeAttribute("readonly"),e.submitBtn.disabled=!1,e.loader.classList.add("hidden"),o&&(e.gallery.innerHTML="",e.request.value="",f(o,e.gallery),h(o))}async function L(n){e.loader.classList.remove("hidden");const o=await m(c,++d,i);if(!o)return;const a=e.gallery.lastElementChild;f(o,e.gallery),e.loader.classList.add("hidden"),h(o);const{top:s}=a.getBoundingClientRect();window.scrollBy({top:s-24,behavior:"smooth"})}function h(n){n.length<i?(e.moreImgBtn.classList.add("hidden"),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):e.moreImgBtn.classList.remove("hidden")}
//# sourceMappingURL=index.js.map
