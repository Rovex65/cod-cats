(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const m=window.location.pathname,c=document.querySelectorAll(".header-nav-link");let r=!1;c.forEach(t=>{t.getAttribute("href").endsWith(m)&&(t.classList.add("nav-link-active"),r=!0)});r||c[0].classList.add("nav-link-active");const d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAUCAMAAADiKH4mAAABGlBMVEUAAAAiHx8hHx8hHh4gHR0hHh4gHh4hHh4gHh4gHR0gHh4iHh4hHh4hHx8iHh4hHh4iHx8iICAhHx8hHx8iHh4hHh7/mAAXFxf/mQAiHx8hHh4hHh4hHh4eHR0gHx8iHh4iHx8iHh4hHx8hHh4hHh4iHh4gHh4iHh4fHh7/mQAgHR3/mQAhHx8hHx//mgAhHh7/mgD/mgAfHx//mgD/nQAzMzP/kQD/mQD/mQD/mAAiHx8hHx//mQAiHx//mgAhHh4hHx//mAD/lgD/pgD/jQAaGhr/mQD/mQD/mQAiHx8iHx//mAD/mQD/mQAgHR3/mQAkICD/lwAgICD/mQD/mQD/mQD/mQAhHh7/mQD/mQD/mAD/lgAiHx//mQD7eHBeAAAAXHRSTlMAr+gYL+Z/cjkpEPWVe/innFhD7od2Owz66szFZCQf+/Lj17GaaV9LMx8V8924em1eVkgkDgUE/t/V0b2yj3JVUkgpFAkG286opaSSZk9OQUATCPDpw7urm4mDM6nMRNkAAAIwSURBVDjLlZGHVttAEEUfli1ZsuwIyZGNewUX3ADTQ+8d0pOn//+N7IiEcBwSk3uOyuzO1b7VQmE2jQULQNHsWO6ShcySuimsBaMQBZCJhmgASjdL8rDMIsxdmYNWL5NcNIEInU1ys1VTZQnY86h4B7gMSWNsp8hIExiQTfWqA2iQM5/VJXqMitpjrxbjYkMNxNHyPE81J5Ekt2pMtPCWYWtFA3I8B/Ksiu7Fd0nPdeVrbool7JEGJHSK1YxqyOPY44Xo9U6PlPjHYyueY0z0HlDmFjDHuuwZRUMWhaxBF60wbp0J0VuYl2TAQM3xUX8DVMSMyF5Mp0KGurQ3IP0G4JAdVWuYDXWbPN/NPekJMefUrVRlzdBDvZjgovZLbzzX1a6kv/enrkwTbqhvkncA7sLiDXlsPOlxOZuHGCuT+gXZkdQ2CiRTVaeYKbOHcZV5/NaLZcbmZ+SoJnRbmYMIGdEchmzBYTlpk7PPdAnDVDoRcyd0s0Iyb3PGcnLp+Vk9n4dWIyXsc90q2Oko9qJAU18ABvrNzzczbRescSED62H1/lDVQKbgNNQMonpS1bqu4YnbI/yF9mU3CN77+CfLGzt4Gf/a93eCa0zxT9b7bbzEYX/0PTjAFFa+rnW3R+3J0eFZ9nR5uI7pHHwMguDkrL9/ID9itb3f/7KRDbpXR/g0xGvwt7tBSDabXZPn2sbOvYpwiVdyeLW9ng0e+XD67XYV/4ek9vdHw5G/vIIp/ABXXoYxeXPUbwAAAABJRU5ErkJggg==";function h({author:t,book_image:o,title:i,_id:a}){return`<li class="book-item" data-book-id="${a}">
              <div class="book-cover">
                  <img src="${o}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${i}</p>
                  <p class="book-author">${t}</p>
              </div>
          </li>`}function p({image:t,title:o,category:i,description:a,author:e,buyLinks:s}){return`<li class="shop-list-book-card">
  <img src="${t}" class="shop-list-book-image">
  <div class="shop-list-book-info">
      <div class="shop-list-card-header">
          <div class="shop-list-book-title-container">
              <p class="shop-list-book-title">${o}</p>
              <p class="shop-list-book-genre">${i}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg class="svg-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="shop-list-book-description">${a}</p>
      <div class="shop-list-product-footer">
          <p class="shop-list-book-author">${e}</p>
          <div class="shop-list-book-stores">
              <a href="${s[0].url}" target="_blank"><img src="${d}" class="shop-list-amazon"></a>
              <a href="${s[1].url}}" target="_blank"><img src="/img/book-2x.png" class="shop-list-apple"></a>
          </div>
      </div>
  </div>
</li>`}function u({list_name:t,books:o}){const i=o.map(h).join("");return`<section class="books-category">
              <h3 class="category-title">${t}</h3>
              <ul class="books-list">${i}</ul>
              <button type="button" class="button" data-category="${t}">See more</button>
          </section>`}function A(t){return'<h1 class="main-title">Best Sellers <span>Books</span></h1>'+t.map(u).join("")}function g(t){const o=t.trim().split(" "),i=o.splice(o.length-1).join("");return`<h1 class="main-title">
          ${o.join(" ")} <span>${i}</span>
        </h1>`}function k(t,o){const i=g(o),a=t.map(h).join("");return`${i}
          <section class="books-category single">
            <ul class="books-list">${a}</ul>
          </section>`}function H({author:t,book_image:o,buy_links:i,description:a,title:e},s,l){return`<div class="modal">
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
            ${a}
          </p>
          <div class="modal-logos-wrap">
            <a href="${i[0].url}" target="blank"><img src="${d}" alt="logo amazon" class="modal-shop-list-amazon" /></a>
            <a href="${i[1].url}" target="blank"><img src="/img/book-1x.png" alt="logo apple" class="modal-shop-list-apple" /></a>
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="button" class="${l.btnClass}" data-id="${s}">${l.btnText}</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>`}function f(t){return t.map(p).join("")}const n=document.getElementById("toggleSwitch");n.addEventListener("change",b);localStorage.getItem("darkMode")==="true"&&(n.checked=!0,document.body.classList.add("dark"));function b(){n.checked?(document.body.classList.add("dark"),localStorage.setItem("darkMode","true")):(document.body.classList.remove("dark"),localStorage.setItem("darkMode","false"))}export{A as a,k as b,f as c,H as t};
//# sourceMappingURL=switch-theme-db8a781a.js.map
