import{d}from"./assets/switch-theme-69eebb2e.js";import{P as m}from"./assets/vendor-20403eb5.js";const y="/cod-cats/assets/bcg-img-shop-list-8a16ad0f.png",c=document.querySelector(".shopping-list"),S=document.querySelector(".pagination-container"),o=3;let a=1;document.addEventListener("DOMContentLoaded",function(){P(),M(),h(a)});c.addEventListener("click",L);function L(t){if(t.target.classList.contains("delete-icon")||t.target.classList.contains("svg-icon")||t.target.closest(".delete-icon")||t.target.closest(".svg-icon")){const e=t.target.closest(".shop-list-book-card");if(e){const n=JSON.parse(localStorage.getItem("shoppingList"))||[],i=n.findIndex(s=>s.title===e.querySelector(".shop-list-book-title").textContent);if(i!==-1){n.splice(i,1),localStorage.setItem("shoppingList",JSON.stringify(n));const s=n.length,p=Math.ceil(s/o);s>0&&a>p&&(a=p),r(),document.querySelector(".shopping-list").querySelectorAll(".shop-list-book-card").length===0&&(g(),l())}}}}function r(){h(a),b()}function l(){const t=document.querySelector(".pagination-container");t&&(t.style.display="none")}function f(){const t=c.querySelectorAll(".shop-list-book-card"),e=document.querySelector(".title-shopping");t.length===0?(e.classList.add("empty-cart"),e.classList.remove("not-empty-cart")):(e.classList.remove("empty-cart"),e.classList.add("not-empty-cart"))}function I(){const t=JSON.parse(localStorage.getItem("shoppingList"))||[],e=t.length,n=d(t);c.innerHTML=n,f(),e>o?b():l()}function g(){const t=`
    <p class="text-shopping">
      This page is empty, add some books and proceed to order.
    </p>
    <img src=${y} alt="" class="img-shopping" />
  `;c.innerHTML=t,l()}function P(){const t=localStorage.getItem("shoppingList");t==null?g():I()}function M(){const n={totalItems:(JSON.parse(localStorage.getItem("shoppingList"))||[]).length,itemsPerPage:o,visiblePages:3,centerAlign:!1,page:a,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new m(S,n).on("afterMove",function(s){a=s.page,r()})}function h(t){const e=JSON.parse(localStorage.getItem("shoppingList"))||[],n=(t-1)*o,i=n+o,s=e.slice(n,i);c.innerHTML="";const p=d(s);c.innerHTML=p,f(),e.length===0&&g()}function b(){const e=(JSON.parse(localStorage.getItem("shoppingList"))||[]).length,n=document.querySelector(".pagination-container");if(e>o){const i={totalItems:e,itemsPerPage:o,visiblePages:3,centerAlign:!0,page:a,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}},s=n.querySelector(".tui-pagination");s&&s.remove(),new m(n,i).on("afterMove",function(u){a=u.page,r()})}else l()}
//# sourceMappingURL=commonHelpers2.js.map
