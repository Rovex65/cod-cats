import{c as d}from"./assets/switch-theme-a54c4d2c.js";import{P as u}from"./assets/vendor-65593ac5.js";const f="/cod-cats/assets/bcg-img-shop-list-8a16ad0f.png",i=document.querySelector(".shopping-list"),g=document.querySelector(".pagination-container"),c=3;let a=1;document.addEventListener("DOMContentLoaded",function(){M(),S(),l(a)});i.addEventListener("click",k);function k(t){if(t.target.classList.contains("delete-icon")||t.target.classList.contains("svg-icon")){const e=t.target.closest(".shop-list-book-card");if(e){const s=JSON.parse(localStorage.getItem("saved-books"))||[],o=s.findIndex(n=>n.title===e.querySelector(".shop-list-book-title").textContent);if(o!==-1){s.splice(o,1),localStorage.setItem("saved-books",JSON.stringify(s)),b();const n=(a-1)*c,r=n+c;o>=n&&o<r,l(a)}}}}function h(){const t=i.querySelectorAll(".shop-list-book-card"),e=document.querySelector(".title-shopping");t.length!==0&&e.classList.add("not-empty-cart")}function P(){const t=JSON.parse(localStorage.getItem("saved-books"))||[],e=d(t);i.innerHTML=e,h(),S(),b()}function I(){const t=`
    <p class="text-shopping">
      This page is empty, add some books and proceed to order.
    </p>
    <img src=${f} alt="" class="img-shopping" />
  `;i.innerHTML=t}function M(){const t=localStorage.getItem("saved-books");t==null?I():P()}function S(){const s={totalItems:(JSON.parse(localStorage.getItem("saved-books"))||[]).length,itemsPerPage:c,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new u(g,s).on("afterMove",function(n){a=n.page,l(a)})}function l(t){const e=JSON.parse(localStorage.getItem("saved-books"))||[],s=(t-1)*c,o=s+c,n=e.slice(s,o);i.innerHTML="";const r=d(n);i.innerHTML=r,h(),e.length===0&&I()}function b(){const t=JSON.parse(localStorage.getItem("saved-books"))||[],s={totalItems:t.length,itemsPerPage:c,visiblePages:3,centerAlign:!0,page:a};t.length===0?g.innerHTML="":new u(g,s).on("afterMove",function(n){a=n.page,l(a)})}const p=document.querySelector(".shopping-list"),m=localStorage.getItem("shoppingList");!m||JSON.parse(m).length===0?L():O();p.addEventListener("click",v);function v(t){if(t.target.classList.contains("delete-icon")||t.target.classList.contains("svg-icon")||t.target.closest(".delete-icon")||t.target.closest(".svg-icon")){const e=t.target.closest(".shop-list-book-card");if(e){e.remove();const s=JSON.parse(localStorage.getItem("shoppingList"))||[],o=s.findIndex(y=>y.title===e.querySelector(".shop-list-book-title").textContent);o!==-1&&(s.splice(o,1),localStorage.setItem("shoppingList",JSON.stringify(s))),(currentPage-1)*itemsPerPage+itemsPerPage,document.querySelector(".shopping-list").querySelectorAll(".shop-list-book-card").length===0&&L()}}}function x(){const t=p.querySelectorAll(".shop-list-book-card"),e=document.querySelector(".title-shopping");t.length===0?(e.classList.add("empty-cart"),e.classList.remove("not-empty-cart")):(e.classList.remove("empty-cart"),e.classList.add("not-empty-cart"))}function O(){const t=JSON.parse(localStorage.getItem("shoppingList"))||[],e=d(t);p.insertAdjacentHTML("beforeend",e),x()}function L(){const t=`
    <p class="text-shopping">
      This page is empty, add some books and proceed to order.
    </p>
    <img src=${f} alt="" class="img-shopping" />
  `;p.insertAdjacentHTML("beforeend",t)}
//# sourceMappingURL=commonHelpers2.js.map
