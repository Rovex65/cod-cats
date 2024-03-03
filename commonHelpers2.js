import{a as l}from"./assets/template-functions-584fc702.js";const d="/cod-cats/assets/bcg-img-shop-list-8a16ad0f.png",s=document.querySelector(".shopping-list"),c=localStorage.getItem("saved-books");!c||JSON.parse(c).length===0?i():m();s.addEventListener("click",p);function p(e){if(e.target.classList.contains("delete-icon")||e.target.classList.contains("svg-icon")){const t=e.target.closest(".shop-list-book-card");if(t){t.remove();const o=JSON.parse(localStorage.getItem("saved-books"))||[],a=o.findIndex(r=>r.title===t.querySelector(".shop-list-book-title").textContent);a!==-1&&(o.splice(a,1),localStorage.setItem("saved-books",JSON.stringify(o))),n(),s.querySelectorAll(".shop-list-book-card").length===0&&i()}}}function n(){const e=s.querySelectorAll(".shop-list-book-card"),t=document.querySelector(".title-shopping");e.length===0?(t.classList.add("empty-cart"),t.classList.remove("not-empty-cart")):(t.classList.remove("empty-cart"),t.classList.add("not-empty-cart"))}function m(){const e=JSON.parse(localStorage.getItem("saved-books"))||[],t=l(e);s.insertAdjacentHTML("beforeend",t),n()}function i(){const e=`
    <p class="text-shopping">
    This page is empty, add some books and proceed to order.
    </p>
    <img src=${d} alt="" class="img-shopping" />
  `;s.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers2.js.map
