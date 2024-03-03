(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function i(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerPolicy&&(t.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?t.credentials="include":o.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(o){if(o.ep)return;o.ep=!0;const t=i(o);fetch(o.href,t)}})();function a({author:e,book_image:s,title:i,_id:r}){return`<li class="book-item" data-book-id="${r}">
              <div class="book-cover" data-js-book>
                  <img src="${s}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${i}</p>
                  <p class="book-author">${e}</p>
              </div>
          </li>`}function c(e){const{book_image:s,title:i,list_name:r,description:o,author:t,buy_links:l}=e;return`<li class="shop-list-book-card">
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
          <p class="shop-list-book-author">${t}</p>
          <div class="shop-list-book-stores">
              <a href="${l.find(n=>n.name==="Amazon").url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${l.find(n=>n.name==="Apple Books").url}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function p({list_name:e,books:s}){console.log(e,s);const i=s.map(a).join("");return`<section class="books-category">
              <h3 class="category-title">${e}</h3>
              <ul class="books-list">${i}</ul>
              <button type="button" class="button" data-js-category="${e}">See more</button>
          </section>`}function d(e){return e.map(p).join("")}function u(e){return e.map(c).join("")}export{u as a,d as t};
//# sourceMappingURL=template-functions-dc4d1d98.js.map
