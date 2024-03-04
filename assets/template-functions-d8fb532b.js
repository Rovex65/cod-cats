(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const e of o)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const e={};return o.integrity&&(e.integrity=o.integrity),o.referrerPolicy&&(e.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?e.credentials="include":o.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(o){if(o.ep)return;o.ep=!0;const e=i(o);fetch(o.href,e)}})();const p=window.location.pathname,l=document.querySelectorAll(".header-nav-link");let c=!1;l.forEach(t=>{t.getAttribute("href").endsWith(p)&&(t.classList.add("nav-link-active"),c=!0)});c||l[0].classList.add("nav-link-active");function d({author:t,book_image:s,title:i,_id:r}){return`<li class="book-item" data-book-id="${r}">
              <div class="book-cover" data-js-book>
                  <img src="${s}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${i}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function u(t){const{book_image:s,title:i,list_name:r,description:o,author:e,buy_links:a}=t;return`<li class="shop-list-book-card">
  <img src="${s}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${i}</p>
              <p class="shop-list-book-genre">${r}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${o}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${e}</p>
          <div class="shop-list-book-stores">
              <a href="${a.find(n=>n.name==="Amazon").url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${a.find(n=>n.name==="Apple Books").url}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function f({list_name:t,books:s}){console.log(t,s);const i=s.map(d).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${i}</ul>
              <button type="button" class="button" data-js-category="${t}">See more</button>
          </section>`}function h(t){return t.map(f).join("")}function m(t){return t.map(u).join("")}export{m as a,h as t};
//# sourceMappingURL=template-functions-d8fb532b.js.map
