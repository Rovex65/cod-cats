import{a as i}from"./assets/template-functions-2eed998b.js";const r="/cod-cats/assets/bcg-img-shop-list-8a16ad0f.png",s=document.querySelector(".shopping-list"),a=localStorage.getItem("saved-books");a==null?g():p();s.addEventListener("click",l);function l(e){if(e.target.classList.contains("delete-icon")||e.target.classList.contains("svg-icon")){const t=e.target.closest(".shop-list-book-card");if(t){t.remove();const o=JSON.parse(localStorage.getItem("saved-books"))||[],n=o.findIndex(c=>c.title===t.querySelector(".shop-list-book-title").textContent);n!==-1&&(o.splice(n,1),localStorage.setItem("saved-books",JSON.stringify(o)))}}}function d(){const e=s.querySelectorAll(".shop-list-book-card"),t=document.querySelector(".title-shopping");e.length!==0&&t.classList.add("not-empty-cart")}function p(){const e=JSON.parse(localStorage.getItem("saved-books"))||[],t=i(e);s.insertAdjacentHTML("beforeend",t),d()}function g(){const e=`
    <p class="text-shopping">
    This page is empty, add some books and proceed to order.
    </p>
    <img src=${r} alt="" class="img-shopping" />
  `;s.insertAdjacentHTML("beforeend",e)}
//# sourceMappingURL=commonHelpers2.js.map
