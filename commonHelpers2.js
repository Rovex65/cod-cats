import{c as d}from"./assets/switch-theme-9a4ec509.js";import{P as S}from"./assets/vendor-65593ac5.js";const y="/cod-cats/assets/bcg-img-shop-list-8a16ad0f.png",a=document.querySelector(".shopping-list"),g=document.querySelector(".pagination-container"),c=3;let o=1;document.addEventListener("DOMContentLoaded",function(){P(),f(),r(o)});a.addEventListener("click",I);function I(t){if(t.target.classList.contains("delete-icon")||t.target.classList.contains("svg-icon")||t.target.closest(".delete-icon")||t.target.closest(".svg-icon")){const e=t.target.closest(".shop-list-book-card");if(e){const n=JSON.parse(localStorage.getItem("shoppingList"))||[],s=n.findIndex(i=>i.title===e.querySelector(".shop-list-book-title").textContent);if(s!==-1){n.splice(s,1),localStorage.setItem("shoppingList",JSON.stringify(n));const i=(o-1)*c,L=i+c;s>=i&&s<L,r(o),h()}document.querySelector(".shopping-list").querySelectorAll(".shop-list-book-card").length===0&&(p(),u())}}}function u(){const t=document.querySelector(".pagination-container");t&&(t.style.display="none")}function m(){const t=a.querySelectorAll(".shop-list-book-card"),e=document.querySelector(".title-shopping");t.length===0?(e.classList.add("empty-cart"),e.classList.remove("not-empty-cart")):(e.classList.remove("empty-cart"),e.classList.add("not-empty-cart"))}function b(){const t=JSON.parse(localStorage.getItem("shoppingList"))||[],e=d(t);a.insertAdjacentHTML("beforeend",e),m()}function p(){const t=`
    <p class="text-shopping">
      This page is empty, add some books and proceed to order.
    </p>
    <img src=${y} alt="" class="img-shopping" />
  `;a.innerHTML=t,u()}function P(){const t=localStorage.getItem("shoppingList");t==null?p():(b(),h())}function f(){const n={totalItems:(JSON.parse(localStorage.getItem("shoppingList"))||[]).length,itemsPerPage:c,visiblePages:3,centerAlign:!1,page:o,template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-page-btn-moveButton"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-page-btn-disabledMoveButton tui-is-disabled"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-page-btn-moreButton tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};new S(g,n).on("afterMove",function(l){o=l.page,r(o)})}function r(t){const e=JSON.parse(localStorage.getItem("shoppingList"))||[],n=(t-1)*c,s=n+c,l=e.slice(n,s);a.innerHTML="";const i=d(l);a.innerHTML=i,m(),e.length===0&&p()}function h(){const t=JSON.parse(localStorage.getItem("shoppingList"))||[];t.length;const e=g.querySelector(".tui-pagination");e&&e.remove(),t.length===0?(g.innerHTML="",p()):f()}
//# sourceMappingURL=commonHelpers2.js.map
