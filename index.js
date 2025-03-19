import{i as u,a as y,S as p}from"./assets/vendor-DsdExPLz.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();u.settings({position:"topRight",iconColor:"#fff",messageColor:"#fff"});async function f(n,o=1,i=20){const t="https://pixabay.com/api/?key="+"49253518-6fbcd3e4502fdc6eae88c44f3"+"&q="+encodeURIComponent(n)+"&image_type=photo&orientation=horizontal&safesearch=true&page="+o+"&per_page="+i;try{if(n=="")throw new Error("Please enter something!");const r=await y.get(t);if(r.data.hits==0)throw new Error("Sorry, there are no images matching your search query. Please, try again!");return[...r.data.hits]}catch(r){u.error({iconUrl:"img/error.svg",message:r.message})}}let b=new p(".gallery a");function h(n,o){let i=n.map(s=>`
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
      </li>`).join("");o.insertAdjacentHTML("beforeend",i),b.refresh()}const e={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loading"),moreImgBtn:document.getElementById("moreImgBtn"),request:document.querySelector(".form input"),submitBtn:document.querySelector(".form button")};e.form.addEventListener("submit",L);let d,a,c;async function L(n){n.preventDefault(),e.request.setAttribute("readonly",!0),e.submitBtn.disabled=!0,e.loader.classList.remove("hidden"),d=1,a=20,c=e.request.value.trim();const o=await f(c,d,a);e.request.removeAttribute("readonly"),e.submitBtn.disabled=!1,e.loader.classList.add("hidden"),o&&(e.gallery.innerHTML="",e.request.value="",h(o,e.gallery),g(o))}async function m(n){e.loader.classList.remove("hidden");const o=await f(c,++d,a);if(!o)return;const i=e.gallery.lastElementChild;h(o,e.gallery),e.loader.classList.add("hidden"),g(o);const{top:s}=i.getBoundingClientRect();window.scrollBy({top:s-24,behavior:"smooth"})}function g(n){n.length<a?(e.moreImgBtn.classList.add("hidden"),e.moreImgBtn.removeEventListener("click",m),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):(e.moreImgBtn.classList.remove("hidden"),e.moreImgBtn.addEventListener("click",m))}
//# sourceMappingURL=index.js.map
