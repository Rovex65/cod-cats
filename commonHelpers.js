import"./assets/styles-f98a38a6.js";import{a as e}from"./assets/vendor-0cb09735.js";function r({author:o,book_image:t,title:s,_id:a}){return`<li class="book-item" data-book-id="${a}">
              <div class="book-cover" data-js-book>
                  <img src="${t}" alt="book cover" />
                  <div class="quick-view">Quick view</div>
              </div>
              <div class="book-info">
                  <p class="book-title">${s}</p>
                  <p class="book-author">${o}</p>
              </div>
          </li>`}function n({list_name:o,books:t}){console.log(o,t);const s=t.map(r).join("");return`<section class="books-category">
              <h3 class="category-title">${o}</h3>
              <ul class="books-list">${s}</ul>
              <button type="button" class="button" data-js-category="${o}">See more</button>
          </section>`}function i(o){return o.map(n).join("")}class c{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books/",e.defaults.baseURL=this.BASE_URL}async getCategoryList(){return(await e.get("category-list")).data}async getTopBooks(){return(await e.get("top-books")).data}async getBooksByCategory(t){const s=new URLSearchParams({category:t});return(await e.get("category",{params:s})).data}async getBookById(t){return(await e.get(`${t}`)).data}}const l=new c,k=document.querySelector(".books-wrapper");function g(o,t){const s=i(t);o.insertAdjacentHTML("beforeend",s)}async function p(){try{const o=await l.getTopBooks();console.log(o),g(k,o)}catch(o){console.log(o)}}p();const u=new c;async function b(o){const t=await u.getBooksByCategory(o);console.log(t),localStorage.setItem("saved-books",JSON.stringify(t))}b("Audio Fiction");
//# sourceMappingURL=commonHelpers.js.map
