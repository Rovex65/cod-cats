import{t as b,a as L,b as w}from"./assets/switch-theme-61d4fbb7.js";import{b as v,a as r}from"./assets/vendor-65593ac5.js";function x(t,e){const o=t.target,n=h();if(o.classList.toggle("added"),o.classList.contains("added")){S(o,n,e);return}$(o,n)}function h(){return JSON.parse(localStorage.getItem("shoppingList"))||[]}function S(t,e,o){const n=B(o);e.push(n),y(e),t.textContent="Remove from the shopping list"}function B(t){const{_id:e,list_name:o,author:n,book_image:i,buy_links:s,description:u,title:a}=t;return{bookId:e,image:i,title:a,category:o,description:u,author:n,buyLinks:s}}function y(t){localStorage.setItem("shoppingList",JSON.stringify(t))}function $(t,e){const o=e.filter(({bookId:n})=>n!==t.dataset.id);y(o),t.textContent="Add to shopping list"}const p=document.querySelector("body");function C(t,e,o){const n=v.create(b(t,e,o),{onShow:s=>{p.classList.add("modal-is-open"),document.addEventListener("keydown",i),s.element().querySelector(".modal-btn").onclick=s.close},onClose:s=>{p.classList.remove("modal-is-open"),document.removeEventListener("keydown",i)}});n.show();function i(s){s.key==="Escape"&&n.close()}}class f{constructor(){this.BASE_URL="https://books-backend.p.goit.global/books/",r.defaults.baseURL=this.BASE_URL}async getCategoryList(){return(await r.get("category-list")).data}async getTopBooks(){return(await r.get("top-books")).data}async getBooksByCategory(e){const o=new URLSearchParams({category:e});return(await r.get("category",{params:o})).data}async getBookById(e){return(await r.get(`${e}`)).data}}const l=new f,m=document.querySelector(".books-wrapper");function k(t){const e=L(t);m.insertAdjacentHTML("beforeend",e)}async function E(){try{const t=await l.getTopBooks();k(t)}catch(t){console.log(t)}}E();let c;function T(t){const e=document.querySelectorAll(".sidebar-categories-name a"),o=t==="all-categories"?"all-categories":t;for(let n=0;n<e.length;n++)e[n].classList.remove("active");document.querySelector(`[data-category="${o}"]`).classList.add("active")}function M(t){const e=w(t,c);m.innerHTML=e}async function A(t){try{if(c=t.dataset.category,T(c),c==="all-categories"){m.innerHTML="";const e=await l.getTopBooks();k(e)}else{const e=await l.getBooksByCategory(c);M(e)}}catch(e){console.log(e)}}function I(t){return h().find(({bookId:o})=>o===t)||!1}function q(t){return I(t)?{btnText:"Remove from the shopping list",btnClass:"modal-add-btn added"}:{btnText:"Add to shopping list",btnClass:"modal-add-btn"}}let d;async function H(t){try{const e=t.closest(".book-item").dataset.bookId;d=await l.getBookById(e);const o=q(e);C(d,e,o)}catch(e){console.log(e)}}document.addEventListener("click",t=>{const e=t.target;e.hasAttribute("data-category")&&(t.preventDefault(),A(e)),e.closest(".book-item")&&H(e),e.classList.contains("modal-add-btn")&&x(t,d)});const _="../img/save.png",j="../img/save@2x.png",O="../img/hope.png",R="../img/hope@2x.png",U="../img/24u.png",D="../img/24u2x.png",F="../img/medical.png",z="../img/medical@2x.png",P="../img/sans.png",N="../img/sans@2x.png",J="../img/razom.png",W="../img/razom@2x.png",Z="../img/hunger.png",G="../img/hunger@2x.png",K="../img/vision.png",Q="../img/vision@2x.png",V="../img/prytula.png",X="../img/prytula@2x.png.",Y=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:`${_}`,img2x:`${j}`},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:`${O}`,img2x:`${R}`},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:`${U}`,img2x:`${D}`},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:`${F}`,img2x:`${z}`},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:`${P}`,img2x:`${N}`},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:`${J}`,img2x:`${W}`},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:`${Z}`,img2x:`${G}`},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:`${K}`,img2x:`${Q}`},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:`${V}`,img2x:`${X}`}];let g=0;const tt=document.querySelector(".support-ukraine-list"),et=document.querySelector(".slider-liner-su"),ot=document.querySelector(".support-ukraine-btn");ot.addEventListener("click",at);nt(Y);function nt(t){t.forEach(function(e,o){const{title:n,url:i,img:s,img2x:u}=e,a={};a.title=n,a.url=i,a.img=s,a.img2x=u,a.index=o,tt.insertAdjacentHTML("beforeend",st(a))})}function st(t){const{title:e,url:o,img:n,img2x:i,index:s}=t;return`<li class="list-unit">
	<a href="${o}" class="list-unit-link" target="_blank"><span class="span-list-unit">${it(s+1)}</span>
	<img class="img-list-unit"
		src="${n}"
		srcset="${n} 1x, ${i} 2x"
		alt="${e}"
	></img></a>
</li>`}function it(t){return String(t).padStart(2,"0")}function at(){g+=157,g>500&&(g=0),et.style.top=-g+"px"}const rt=new f,ct=document.querySelector(".sidebar-categories-name");document.querySelector(".scrolling-line");async function gt(){try{const t=await rt.getCategoryList();ct.insertAdjacentHTML("beforeend",t.map(e=>lt(e)).join(""))}catch(t){console.error("Error fetching category list:",t.message)}}function lt({list_name:t}){return`<li class="sb-category-item">
            <a href="#" data-category="${t}">${t}</a>
          </li>`}gt();function ut(){const t=document.getElementById("burgerToggle"),e=document.getElementById("burgerMenu"),o=document.querySelector("header");t.addEventListener("click",function(){e.classList.toggle("burger-menu-show"),e.classList.contains("burger-menu-show")?(t.innerHTML=`
        <svg width="18" height="18" stroke="#000">
          <use href="../img/icons.svg#icon-close"></use>
        </svg>`,o.classList.add("overflow-hidden"),document.body.classList.add("burger-menu-show")):(t.innerHTML=`
        <svg width="28" height="28">
          <use href="../img/icons.svg#icon-menu"></use>
        </svg>`,o.classList.remove("overflow-hidden"),document.body.classList.remove("burger-menu-show"))})}document.addEventListener("DOMContentLoaded",function(){ut()});const dt=document.getElementById("home");document.getElementById("shopping-list");dt.classList.add("active");
//# sourceMappingURL=commonHelpers.js.map
