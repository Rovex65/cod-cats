(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const u=window.location.pathname,c=document.querySelectorAll(".header-nav-link");let d=!1;c.forEach(t=>{t.getAttribute("href").endsWith(u)&&(t.classList.add("nav-link-active"),d=!0)});d||c[0].classList.add("nav-link-active");function p({author:t,book_image:e,title:i,_id:l}){return`<li class="book-item" data-book-id="${l}">
              <div class="book-cover">
                  <img src="${e}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${i}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function m(t){const{book_image:e,title:i,list_name:l,description:o,author:s,buy_links:a}=t;return`<li class="shop-list-book-card">
  <img src="${e}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${i}</p>
              <p class="shop-list-book-genre">${l}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${o}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${s}</p>
          <div class="shop-list-book-stores">
              <a href="${a.find(n=>n.name==="Amazon").url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${a.find(n=>n.name==="Apple Books").url}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function h({list_name:t,books:e}){console.log(t,e);const i=e.map(p).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${i}</ul>
              <button type="button" class="button" data-category="${t}">See more</button>
          </section>`}function g(t){return'<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t.map(h).join("")}function f(t){const e=t.trim().split(" "),i=e.splice(e.length-1).join("");return`<h1 class="main-title">
          ${e.join(" ")} <span>${i}</span>
        </h1>`}function b(t,e){const i=f(e),l=t.map(p).join("");return`${i}
          <section class="books-category">
            <ul class="books-list">${l}</ul>
          </section>`}function v(t){return t.map(m).join("")}const r=document.getElementById("toggleSwitch");r.addEventListener("change",k);localStorage.getItem("darkMode")==="true"&&(r.checked=!0,document.body.classList.add("dark"));function k(){r.checked?(document.body.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark"),localStorage.setItem("darkMode","false"))}export{b as a,v as b,g as t};
//# sourceMappingURL=switch-theme-2a3403e6.js.map
