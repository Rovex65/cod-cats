import{t as i}from"./assets/template-functions-dffd59fd.js";import{a as s}from"./assets/vendor-0cb09735.js";class r{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books/",s.defaults.baseURL=this.BASE_URL}async getCategoryList(){return(await s.get("category-list")).data}async getTopBooks(){return(await s.get("top-books")).data}async getBooksByCategory(t){const e=new URLSearchParams({category:t});return(await s.get("category",{params:e})).data}async getBookById(t){return(await s.get(`${t}`)).data}}const g=new r,y=document.querySelector(".books-wrapper");function l(o,t){const e=i(t);o.insertAdjacentHTML("beforeend",e)}async function k(){try{const o=await g.getTopBooks();console.log(o),l(y,o)}catch(o){console.log(o)}}k();const m=new r;async function u(o){const t=await m.getBooksByCategory(o);console.log(t),localStorage.setItem("saved-books",JSON.stringify(t))}u("Audio Fiction");const c=new r,d=document.querySelector(".sidebar-categories-name");document.querySelector(".scrolling-line");async function p(){try{const o=await c.getCategoryList();d.innerHTML=o.map(e=>b(e)).join(""),document.querySelectorAll(".sb-category-item").forEach(e=>{e.addEventListener("click",async()=>{const a=e.querySelector("a").textContent,n=await c.getBooksByCategory(a);console.log(`Books in category ${a}:`,n)})})}catch(o){console.error("Error fetching category list:",o.message)}}function b({list_name:o}){return`<li class="sb-category-item">
            <a href="#" data-category="${o}">${o}</a>
          </li>`}p();
//# sourceMappingURL=commonHelpers.js.map
