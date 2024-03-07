(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const c="/cod-cats/assets/icons-a661507a.svg#icon-close",p="/cod-cats/assets/icons-a661507a.svg#icon-menu";function v(){const t=document.getElementById("burgerToggle"),e=document.getElementById("burgerMenu"),s=document.querySelector("header");t.addEventListener("click",function(){e.classList.toggle("burger-menu-show"),e.classList.contains("burger-menu-show")?(t.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="${c}"></use>
        </svg>`,s.classList.add("overflow-hidden")):(t.innerHTML=`
        <svg width="28" height="28">
          <use href="${p}"></use>
        </svg>`,s.classList.remove("overflow-hidden"))})}document.addEventListener("DOMContentLoaded",function(){v()});const H=window.location.pathname,r=document.querySelectorAll(".burger-menu-nav-link");let h=!1;r.forEach(t=>{const e=t.getAttribute("href");H.endsWith(e.slice(2))&&(t.classList.add("burger-menu-nav-link-active"),h=!0)});h||r[0].classList.add("burger-menu-nav-link-active");const f=window.location.pathname,d=document.querySelectorAll(".header-nav-link");let g=!1;d.forEach(t=>{const e=t.getAttribute("href");f.endsWith(e.slice(2))&&(t.classList.add("nav-link-active"),g=!0)});g||d[0].classList.add("nav-link-active");const u="data:image/png;base64,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",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABACAMAAACZQlHRAAABklBMVEUAAAD6cBn/ngT8hw78kQn6fhL8gRH8jAz5kA7/ixD+nAX6chj8gxH9mAX7dhf4cBT+mgL7chn6cxj6chn+nQT/ngT6chj5chn+ngT6dRf/mQf9lwj+nwT7cBr+ngT9mAf+nAX/nwX8fBX+lAn8ehX/lgj/ngT7eRT/hAn7eBf8nQT6cBn9ngX6cBj/ngX/mwb5cxf6cxn8chj////6dhb+mgb6chn+nQX9lgj7eRX6cxj7fBP+mQf7eBb9lAn9kgn6dRf7exX/+PD9lQf7gBL9mAf8hBD8ig37fhP8iA79jwv8jA37ghH8hhD9kQr9jgz8hw/+ngX9sHb7exL9snX9jQv9uHT7eA78hAr9tXX9v438fgz8hwn9igj9t3T+pjz9lhH7ew3+7d//6tb/6tH+0p3+x4X+unP7iDL//Pj+yaH8mUv8lkb+q0P8gAv/9+z/9ef/8+b/5MP+2Lz+z6r+vID9rnD+uW/9qGz+tmH8nlH+q0j9ozD7fhr7dhP7gQv/+PL/7t3/5cn+28D+0rH9wpgBV4sBAAAAM3RSTlMA/PtcXFxcXAUI9NNCISAZGfjy2djSv7OycnH9+erozMBeVlZNTUU+Dsi5mZiUk4SDZF5dts8SAAACnUlEQVRYw+3XV1MaURTA8U1sNMGu2LumFzBIQAgkJChqKCKKBaSDEHsv6d/b3TkL7L1378xeZnjz/7AsZ8/+BtgnuMfql2r6dV/XsGbwKaVBzXD385fTKrow1m0JWIQCAXitvBPO+EMARt1jFKStz6K4vjY5obXLwlBXKynMjs4xNUp+l/45xt4QP4SGldC04R/Czlw/Rox4PB67R8guOYEq7+x26XgEFdQD88wNqNEnOl9D6HPVfUaLx+NOdOKIxx3YSIcQU45qztvM8ZH7IJkuOSujUjp14D48ztzCCJpCiIkqEEuZyiVjcEfsd2WUKlWRCYRodJZLm6RlhdFZXjpKV1Yb5YmMCe3G6bz5hY4yFGIVCh9iRGpp9Q82OgqLyxixBO24TVixGD5x74jLSomrK6XEd4gkLi5IQlxuQYgWH1/YF94miGyWILb5RT4fTkAyxDpJwC5OfINIYl2GEJfliQ0lxIa43IAQDTUQixixCMkQuyQBu4qJXcWEf8Uv9FMJ8cMPYcQKRBKbmyQhLmPEV2hLESEuo0QzC7ElLjdjxDKNWFNKLEN7BLEmQ4jLGPEFUkTsictN9SIiBBEkiYg84YWASJxGo9FCUkokC/zoNAGEF0KJJgnx7/ouZPN6baHiX4EI8oeTfX7Cj2zXJ3TCBkXcCX67XCiYF4j8mWS0n3BHbBBBQMU74egq33AuEOcgiLmKIVli3CWf9X8wWLBSLo4jxKSVUu7yMke7NokQM7S1+1zunnZtBiH0CzWkRwi1mW/BDMEpEXFVzSE9MzOn5dCM7IQRIwwdnxhrN3BYbz8yZuTwVD1sQs8sR6Tv/MBQp56TydCrXOg1UP6ZvdcqA7TvOGoq3Yse7VBH+xNK7R1Dnb2vdGrusbr1APdNdrdlHi3cAAAAAElFTkSuQmCC";function A({author:t,book_image:e,title:s,_id:n}){return`<li class="book-item" data-book-id="${n}">
              <div class="book-cover">
                  <img src="${e}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${s}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function b({image:t,title:e,category:s,description:n,author:o,buyLinks:i}){return`<li class="shop-list-book-card">
  <img src="${t}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${e}</p>
              <p class="shop-list-book-genre">${s}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${n}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${o}</p>
          <div class="shop-list-book-stores">
              <a href="${i[0].url}" target="_blank"><img src="${u}" class="shop-list-amazon"></a>
              <a href="${i[1].url}}" target="_blank"><img src="${m}" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function k({list_name:t,books:e}){const s=e.map(A).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${s}</ul>
              <button type="button" class="button" data-category="${t}">See more</button>
          </section>`}function B(t){return'<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t.map(k).join("")}function Q(t){const e=t.trim().split(" "),s=e.splice(e.length-1).join("");return`<h1 class="main-title">
          ${e.join(" ")} <span>${s}</span>
        </h1>`}function j(t,e){const s=Q(e),n=t.map(A).join("");return`${s}
          <section class="books-category single">
            <ul class="books-list">${n}</ul>
          </section>`}function x({author:t,book_image:e,buy_links:s,description:n,title:o},i,a){return`<div class="modal">
      <button type="button" class="modal-btn">
        <svg class="modal-btn-icon" width="18" height="18">
          <use href="${c}"></use>
        </svg>
      </button>
      <div class="modal-wrap">
        <img src="${e}" class="modal-image" />
        <div class="modal-book-wrap">
          <h2 class="modal-book-title">${o}</h2>
          <p class="modal-book-author">${t}</p>
          <p class="modal-book-descr">
            ${n}
          </p>
          <div class="modal-logos-wrap">
            <a href="${s[0].url}" target="blank"><img src="${u}" alt="logo amazon" class="modal-shop-list-amazon" /></a>
            <a href="${s[1].url}" target="blank"><img src="${m}" alt="logo apple" class="modal-shop-list-apple" /></a>
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="button" class="${a.btnClass}" data-id="${i}">${a.btnText}</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>`}function E(t){return t.map(b).join("")}const l=document.getElementById("toggleSwitch");l.addEventListener("change",L);localStorage.getItem("darkMode")==="true"&&(l.checked=!0,document.body.classList.add("dark"));function L(){l.checked?(document.body.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark"),localStorage.setItem("darkMode","false"))}export{B as a,j as b,E as c,x as t};
//# sourceMappingURL=switch-theme-e230f694.js.map
