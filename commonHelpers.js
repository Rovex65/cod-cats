import{t as u,a as y}from"./assets/switch-theme-7c723480.js";import{b as k,a as s}from"./assets/vendor-2e8888ea.js";function b({book_image:t,title:o,list_name:e,description:a,author:M,buy_links:U}){const g=k.create(`<div class="modal">
      <button type="button" class="modal-btn">
        <svg class="modal-btn-icon" width="18" height="18">
          <use href="../img/icons.svg#icon-close"></use>
        </svg>
      </button>
      <div class="modal-wrap">
        <img src="" class="modal-image" />
        <div class="modal-book-wrap">
          <h2 class="modal-book-title">HELLO BEAUTIFUL</h2>
          <p class="modal-book-author">Ann Napolitano</p>
          <p class="modal-book-descr">
            In a homage to Louisa May Alcott’s “Little Women,” a young man’s dark
            past resurfaces as he gets to the know the family of his college
            sweetheart.
          </p>
          <div class="modal-logos-wrap">
            <img src="../img/amazon.png" alt="" class="modal-shop-list-amazon" />
            <img src="../img/book-1x.png" alt="" class="modal-shop-list-apple" />
          </div>
        </div>
      </div>
      <div class="modal-btn-add">
        <button type="submit" class="modal-add-btn">Add to shopping list</button>
        <p class="modal-btn-text">
          Сongratulations! You have added the book to the shopping list. To
          delete, press the button “Remove from the shopping list”.
        </p>
      </div>
    </div>
  `,{onShow:i=>{document.addEventListener("keydown",m)},onclose:i=>{document.removeEventListener("keydown",m)}});g.show();function m(i){i.key==="Escape"&&g.close()}}class d{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books/",s.defaults.baseURL=this.BASE_URL}async getCategoryList(){return(await s.get("category-list")).data}async getTopBooks(){return(await s.get("top-books")).data}async getBooksByCategory(o){const e=new URLSearchParams({category:o});return(await s.get("category",{params:e})).data}async getBookById(o){return(await s.get(`${o}`)).data}}const c=new d,r=document.querySelector(".books-wrapper"),h=document.querySelector(".main-page");document.querySelector(".pop-up .modal-wrap");const f=document.querySelector(".pop-up .modal-add-btn");function p(t){const o=u(t);r.insertAdjacentHTML("beforeend",o)}async function L(){try{const t=await c.getTopBooks();p(t)}catch(t){console.log(t)}}L();let n;function v(t){const o=document.querySelectorAll(".sidebar-categories-name a"),e=t==="all-categories"?"all-categories":t;for(let a=0;a<o.length;a++)o[a].classList.remove("active");document.querySelector(`[data-category="${e}"]`).classList.add("active")}function w(t){const o=y(t,n);r.innerHTML=o}async function B(t){try{if(n=t.dataset.category,v(n),n==="all-categories"){r.innerHTML="";const o=await c.getTopBooks();p(o)}else{const o=await c.getBooksByCategory(n);w(o)}}catch(o){console.log(o)}}let l;async function A(t){try{const o=t.closest(".book-item").dataset.bookId;l=await c.getBookById(o),b(l)}catch(o){console.log(o)}}h.addEventListener("click",t=>{const o=t.target;o.hasAttribute("data-category")&&(t.preventDefault(),B(o))});f.addEventListener("click",t=>{updateShoppingList(t,l)});r.addEventListener("click",t=>{const o=t.target;o.closest(".book-item")&&A(o)});const S=new d;async function T(t){const o=await S.getBooksByCategory(t);localStorage.setItem("saved-books",JSON.stringify(o))}T("Audio Fiction");const C=new d,E=document.querySelector(".sidebar-categories-name");document.querySelector(".scrolling-line");async function q(){try{const t=await C.getCategoryList();E.insertAdjacentHTML("beforeend",t.map(o=>I(o)).join(""))}catch(t){console.error("Error fetching category list:",t.message)}}function I({list_name:t}){return`<li class="sb-category-item">
            <a href="#" data-category="${t}">${t}</a>
          </li>`}q();
//# sourceMappingURL=commonHelpers.js.map
