(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const u=window.location.pathname,l=document.querySelectorAll(".header-nav-link");let d=!1;l.forEach(t=>{t.getAttribute("href").endsWith(u)&&(t.classList.add("nav-link-active"),d=!0)});d||l[0].classList.add("nav-link-active");function p({author:t,book_image:s,title:i,_id:a}){return`<li class="book-item" data-book-id="${a}">
              <div class="book-cover" data-js-book>
                  <img src="${s}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${i}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function f(t){const{book_image:s,title:i,list_name:a,description:e,author:o,buy_links:r}=t;return`<li class="shop-list-book-card">
  <img src="${s}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${i}</p>
              <p class="shop-list-book-genre">${a}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${e}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${o}</p>
          <div class="shop-list-book-stores">
              <a href="${r.find(c=>c.name==="Amazon").url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${r.find(c=>c.name==="Apple Books").url}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function h({list_name:t,books:s}){console.log(t,s);const i=s.map(p).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${i}</ul>
              <button type="button" class="button" data-js-category="${t}">See more</button>
          </section>`}function k(t){return t.map(h).join("")}function g(t){return t.map(f).join("")}const n=document.getElementById("toggleSwitch");n.addEventListener("change",m);localStorage.getItem("darkMode")==="true"&&(n.checked=!0,document.body.classList.add("dark"));function m(){n.checked?(document.body.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark"),localStorage.setItem("darkMode","false"))}export{g as a,k as t};
//# sourceMappingURL=switch-theme-5dbf9c04.js.map
