(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const p=window.location.pathname,c=document.querySelectorAll(".header-nav-link");let r=!1;c.forEach(t=>{t.getAttribute("href").endsWith(p)&&(t.classList.add("nav-link-active"),r=!0)});r||c[0].classList.add("nav-link-active");function d({author:t,book_image:o,title:a,_id:i}){return`<li class="book-item" data-book-id="${i}">
              <div class="book-cover">
                  <img src="${o}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${a}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function u({book_image:t,title:o,list_name:a,description:i,author:e,buy_links:s}){return`<li class="shop-list-book-card">
  <img src="${t}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${o}</p>
              <p class="shop-list-book-genre">${a}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${i}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${e}</p>
          <div class="shop-list-book-stores">
              <a href="${s[0].url}" target="_blank"><img src="./img/amazon-2x.png" class="shop-list-amazon"></a>
              <a href="${s[1].url}}" target="_blank"><img src="./img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function m({list_name:t,books:o}){const a=o.map(d).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${a}</ul>
              <button type="button" class="button" data-category="${t}">See more</button>
          </section>`}function b(t){return'<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t.map(m).join("")}function h(t){const o=t.trim().split(" "),a=o.splice(o.length-1).join("");return`<h1 class="main-title">
          ${o.join(" ")} <span>${a}</span>
        </h1>`}function f(t,o){const a=h(o),i=t.map(d).join("");return`${a}
          <section class="books-category">
            <ul class="books-list">${i}</ul>
          </section>`}function k({author:t,book_image:o,buy_links:a,description:i,title:e},s){return`<div class="modal">
      <button type="button" class="modal-btn">
        <svg class="modal-btn-icon" width="18" height="18">
          <use href="/img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-wrap">
        <img src="${o}" class="modal-image" />
        <div class="modal-book-wrap">
          <h2 class="modal-book-title">${e}</h2>
          <p class="modal-book-author">${t}</p>
          <p class="modal-book-descr">
            ${i}
          </p>
          <div class="modal-logos-wrap">
            <a href="${a[0].url}" target="blank"><img src="/img/amazon.png" alt="logo amazon" class="modal-shop-list-amazon" /></a>
            <a href="${a[1].url}" target="blank"><img src="/img/book-1x.png" alt="logo apple" class="modal-shop-list-apple" /></a>
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="button" class="modal-add-btn" data-book-id="${s}">Add to shopping list</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>`}function v(t){return t.map(u).join("")}const n=document.getElementById("toggleSwitch");n.addEventListener("change",g);localStorage.getItem("darkMode")==="true"&&(n.checked=!0,document.body.classList.add("dark"));function g(){n.checked?(document.body.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark"),localStorage.setItem("darkMode","false"))}export{b as a,f as b,v as c,k as t};
//# sourceMappingURL=switch-theme-a2c30784.js.map
