"use strict";


const listElem = document.querySelector(".shopping-list");
const containerElem = document.querySelector(".wrap-shopping");
const btn = document.querySelector(".check");
const textElem = document.querySelector(".text-shopping");
const backgroundImg = document.querySelector(".img-shopping");




const books = [];

const booksPARSE = [
    {
        "_id": "642fd89ac8cf5ee957f12361",
        "list_name": "Middle Grade Paperback Monthly",
        "date": "2023-04-07T08:46:57.000Z",
        "age_group": "",
        "amazon_product_url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20",
        "article_chapter_link": "",
        "author": "Barbara O'Connor",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250144058.jpg",
        "book_image_width": 330,
        "book_image_height": 485,
        "book_review_link": "",
        "book_uri": "nyt://book/46604242-8624-57d1-bdd4-424c21cde273",
        "contributor": "by Barbara O'Connor",
        "contributor_note": "",
        "created_date": "2023-04-05 23:10:17",
        "description": "",
        "first_chapter_link": "",
        "price": "0.00",
        "primary_isbn10": "1250144051",
        "primary_isbn13": "9781250144058",
        "publisher": "Square Fish",
        "rank": 1,
        "rank_last_week": 0,
        "sunday_review_link": "",
        "title": "WISH",
        "updated_date": "2023-04-05 23:10:17",
        "weeks_on_list": 0,
        "buy_links": [
          {
            "name": "Amazon",
            "url": "https://www.amazon.com/Wish-Barbara-OConnor/dp/1250144051?tag=NYTBSREV-20"
          },
          {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781250144058?at=10lIEQ"
          },
          {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781250144058"
          },
          {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FWISH%252FBarbara%252BO%252527Connor%252F9781250144058&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DWISH%252BBarbara%252BO%252527Connor"
          },
          {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781250144058&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DWISH"
          },
          {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781250144058%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DWISH%2BBarbara%2BO%2527Connor%26aff%3DNYT"
          }
        ],
        "__v": 0
      }, {
        "_id": "643282b1e85766588626a0dc",
        "list_name": "Advice How-To and Miscellaneous",
        "date": "2023-04-09T09:28:38.946Z",
        "age_group": "",
        "amazon_product_url": "https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20",
        "article_chapter_link": "",
        "author": "Alison Roman",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984826398.jpg",
        "book_image_width": 402,
        "book_image_height": 500,
        "book_review_link": "",
        "book_uri": "nyt://book/aab1d8fe-9383-5fa0-bbf9-80321e07a3d8",
        "contributor": "by Alison Roman",
        "contributor_note": "",
        "created_date": "2023-04-05 22:05:27",
        "description": "",
        "first_chapter_link": "",
        "price": "0.00",
        "primary_isbn10": "1984826395",
        "primary_isbn13": "9781984826398",
        "publisher": "Clarkson Potter",
        "rank": 3,
        "rank_last_week": 0,
        "sunday_review_link": "",
        "title": "SWEET ENOUGH",
        "updated_date": "2023-04-05 22:10:17",
        "weeks_on_list": 1,
        "buy_links": [
        {
        "name": "Amazon",
        "url": "https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20"
        },
        {
        "name": "Apple Books",
        "url": "https://goto.applebooks.apple/9781984826398?at=10lIEQ"
        },
        {
        "name": "Barnes and Noble",
        "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984826398"
        },
        {
        "name": "Books-A-Million",
        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FSWEET%252BENOUGH%252FAlison%252BRoman%252F9781984826398&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DSWEET%252BENOUGH%252BAlison%252BRoman"
        },
        {
        "name": "Bookshop",
        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984826398&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DSWEET%2BENOUGH"
        },
        {
        "name": "IndieBound",
        "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984826398%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DSWEET%2BENOUGH%2BAlison%2BRoman%26aff%3DNYT"
        }
        ],
        "__v": 1
        }, 
        {
          "_id": "643282b1e85766588626a0ba",
          "list_name": "Advice How-To and Miscellaneous",
          "date": "2023-04-09T09:28:38.643Z",
          "age_group": "",
          "amazon_product_url": "https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20",
          "article_chapter_link": "",
          "author": "Shannon Bream",
          "book_image": "https://storage.googleapis.com/du-prd/books/images/9780063226050.jpg",
          "book_image_width": 329,
          "book_image_height": 500,
          "book_review_link": "",
          "book_uri": "nyt://book/dc28bfbb-6ba7-54c6-a60b-272a327604ab",
          "contributor": "by Shannon Bream",
          "contributor_note": "",
          "created_date": "2023-04-05 22:05:27",
          "description": "",
          "first_chapter_link": "",
          "price": "0.00",
          "primary_isbn10": "0063226057",
          "primary_isbn13": "9780063226050",
          "publisher": "Broadside",
          "rank": 2,
          "rank_last_week": 0,
          "sunday_review_link": "",
          "title": "THE LOVE STORIES OF THE BIBLE SPEAK",
          "updated_date": "2023-04-05 22:10:17",
          "weeks_on_list": 1,
          "buy_links": [
          {
          "name": "Amazon",
          "url": "https://www.amazon.com/dp/0063226057?tag=NYTBSREV-20"
          },
          {
          "name": "Apple Books",
          "url": "https://goto.applebooks.apple/9780063226050?at=10lIEQ"
          },
          {
          "name": "Barnes and Noble",
          "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780063226050"
          },
          {
          "name": "Books-A-Million",
          "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252FShannon%252BBream%252F9780063226050&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BLOVE%252BSTORIES%252BOF%252BTHE%252BBIBLE%252BSPEAK%252BShannon%252BBream"
          },
          {
          "name": "Bookshop",
          "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780063226050&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK"
          },
          {
          "name": "IndieBound",
          "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780063226050%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BLOVE%2BSTORIES%2BOF%2BTHE%2BBIBLE%2BSPEAK%2BShannon%2BBream%26aff%3DNYT"
          }
          ],
          "__v": 2
          },
          {
            "_id": "643282b1e85766588626a0b2",
            "list_name": "Audio Fiction",
            "date": "2023-04-01T00:00:00.000Z",
            "age_group": "",
            "amazon_product_url": "https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20",
            "article_chapter_link": "",
            "author": "Taylor Jenkins Reid",
            "book_image": "https://storage.googleapis.com/du-prd/books/images/9781524798628.jpg",
            "book_image_width": 325,
            "book_image_height": 495,
            "book_review_link": "https://www.nytimes.com/2019/03/04/books/review/daisy-jones-six-taylor-jenkins-reid.html",
            "book_uri": "nyt://book/bd6e9bf1-e330-5495-9058-cde02152bfd4",
            "contributor": "by Taylor Jenkins Reid",
            "contributor_note": "",
            "created_date": "2023-04-05 23:10:05",
            "description": "A fictional oral history charting the rise and fall of a ’70s rock ’n’ roll band. Read by Jennifer Beals, Benjamin Bratt, Judy Greer and Pablo Schreiber. 9 hours, 3 minutes unabridged.",
            "first_chapter_link": "",
            "price": "0.00",
            "primary_isbn10": "",
            "primary_isbn13": "9781984845306",
            "publisher": "Random House Audio",
            "rank": 2,
            "rank_last_week": 0,
            "sunday_review_link": "",
            "title": "DAISY JONES & THE SIX",
            "updated_date": "2023-04-05 23:10:05",
            "weeks_on_list": 0,
            "buy_links": [
            {
            "name": "Amazon",
            "url": "https://www.amazon.com/Daisy-Jones-Taylor-Jenkins-Reid/dp/1524798622?tag=NYTBSREV-20"
            },
            {
            "name": "Apple Books",
            "url": "https://goto.applebooks.apple/9781984845306?at=10lIEQ"
            },
            {
            "name": "Barnes and Noble",
            "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781984845306"
            },
            {
            "name": "Books-A-Million",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252FTaylor%252BJenkins%252BReid%252F9781984845306&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DDAISY%252BJONES%252B%252526%252BTHE%252BSIX%252BTaylor%252BJenkins%252BReid"
            },
            {
            "name": "Bookshop",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781984845306&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX"
            },
            {
            "name": "IndieBound",
            "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781984845306%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DDAISY%2BJONES%2B%2526%2BTHE%2BSIX%2BTaylor%2BJenkins%2BReid%26aff%3DNYT"
            }
            ],
            "__v": 3
            },
]

const booksJSON = booksPARSE.map((book)=>{
  const zip = JSON.stringify(book);
  return zip;
})

const parse = booksJSON.map((book)=>{
  const unlock = JSON.parse(book);
  books.push(unlock);
})

console.log(books);


btn.addEventListener("click", addAllCards);

function addAllCards() {
  books.forEach(book => {
    const newCardObj = {
      photo: book.book_image,
      width: book.book_image_width,
      height: book.book_image_height,
    //   amazon: imgAmazon,
    //   book: imgBooks,
      title: book.title,
      gener: book.list_name,
      description: book.description,
      author: book.author,
    };
    renderCard(newCardObj);
  });
}

function cardTemplate(obj) {
  return `<div class="book-card">
  <img src="${obj.photo}" class="book-image" width="116" height="165">
  <div class="book-info">
      <div class="card-header">
          <div class="book-title-container">
              <p class="book-title">${obj.title}</p>
              <p class="book-genre">${obj.gener}</p>
          </div>
          <button type='button' class="delete-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M6.75 2.25H11.25M2.25 4.5H15.75M14.25 4.5L13.724 12.3895C13.6451 13.5732 13.6057 14.165 13.35 14.6138C13.1249 15.0088 12.7854 15.3265 12.3762 15.5248C11.9115 15.75 11.3183 15.75 10.132 15.75H7.86799C6.68168 15.75 6.08852 15.75 5.62375 15.5248C5.21457 15.3265 4.87507 15.0088 4.64999 14.6138C4.39433 14.165 4.35488 13.5732 4.27596 12.3895L3.75 4.5M7.5 7.875V11.625M10.5 7.875V11.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
          </button>
      </div>
      <p class="book-description">${obj.description}</p>
      <div class="product-footer">
          <p class="book-author">${obj.author}</p>
          <div class="book-stores">
              <img src="${obj.amazon}"  class="amazon" width="48" height="15">
              <img src="${obj.book}" class="books" width="28" height="28">
          </div>
      </div>
  </div>
</div>`;
}

function renderCard(obj) {
  const markup = cardTemplate(obj);
  textElem.style.display = "none";
  backgroundImg.style.display = "none";
  listElem.insertAdjacentHTML("beforeend", markup);
}