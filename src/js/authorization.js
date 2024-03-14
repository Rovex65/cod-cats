// Import the functions from the SDKs
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

import { getFirestore, getDoc, doc, setDoc, orderBy } from 'firebase/firestore';
import { modal, createAuthForm } from './authorization-form';
import {
  renderEmptyPage,
  renderCartItems,
  initPagination,
  updateShoppingList,
} from './shop-list-functions';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZQ0EdoseO3jOk7tQkC-kJT0g-dUv5xzk',
  authDomain: 'bookshelf-js99.firebaseapp.com',
  projectId: 'bookshelf-js99',
  storageBucket: 'bookshelf-js99.appspot.com',
  messagingSenderId: '923494231450',
  appId: '1:923494231450:web:43f444cd242cd079761e23',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth();

let userId;
onAuthStateChanged(auth, user => {
  const userName = document.querySelector('header [data-user-btn] .username');
  if (user) {
    userId = user.uid;

    if (user.metadata.createdAt === user.metadata.lastLoginAt) {
      setTimeout(() => {
        userName.textContent = user.displayName;
      }, 400);
    } else {
      userName.textContent = user.displayName;
    }

    document.body.classList.add('logged');

    if (location.pathname === '/shop-list.html') {
      renderShopList();
    }
  } else {
    // User is signed out
    // console.log('User is signed out');
    document.body.classList.remove('logged');

    if (location.pathname === '/shop-list.html') {
      window.location.replace('/');
    }
  }
});

async function renderShopList() {
  const data = await getData();
  const page = 1;

  if (!data.length) {
    renderEmptyPage();
  } else {
    renderCartItems(data);
  }

  initPagination(data);
  updateShoppingList(page, data);
}

// add event listeners
function initListenersForAuth() {
  document.addEventListener('click', e => {
    // show Sign Up form
    if (e.target.closest('[data-up-btn]')) {
      createAuthForm();
    }

    // show/hide Log Out button
    if (e.target.closest('.user-btns')) {
      e.target.closest('.user-btns').classList.toggle('open');
    }

    // user log out
    if (e.target.hasAttribute('data-out-btn')) {
      signOutFunc();
    }
  });

  document.addEventListener('submit', e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.pwd.value;

    // create new user
    if (e.target.hasAttribute('data-sign-up')) {
      const username = e.target.elements.username.value;
      createUser(email, password, username);
    }

    // sign in
    if (e.target.hasAttribute('data-sign-in')) {
      signIn(email, password);
    }

    modal.close();
  });
}

async function createUser(email, password, username) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed up
      const user = userCredential.user;
      // console.log('User -> ', user);

      // set username
      updateUserInfo(username);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMsg = errorCode.split('/')[1].split('-').join(' ');
      // console.log(errorMsg);
      alert(errorMsg.toUpperCase());
    });
}

// sign in
function signIn(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      // console.log('Check user -> ', user);
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMsg = errorCode.split('/')[1].split('-').join(' ');
      // console.log(errorMsg);
      alert(errorMsg.toUpperCase());
    });
}

// sign out
function signOutFunc() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('Sign-out successful');
    })
    .catch(error => {
      // An error happened.
      console.log(error);
    });
}

// update profile
function updateUserInfo(username) {
  updateProfile(auth.currentUser, {
    displayName: username,
  })
    .then(user => {
      // Profile updated!
      // console.log(user);
      console.log('Profile updated!');
    })
    .catch(error => {
      // An error occurred
      console.log(error);
    });
}

// Add a new document in collection "shopping_list"
function addData(booksList) {
  setDoc(doc(db, 'shopping_list', userId), booksList);
}

// get a document from collection "shopping_list"
async function getData() {
  const docSnap = await getDoc(doc(db, 'shopping_list', userId));

  let booksArr = [];
  if (docSnap.exists()) {
    createBooksArr(booksArr, docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
  }

  return booksArr;
}

function createBooksArr(booksArr, dataObj) {
  for (let item of Object.values(dataObj)) {
    booksArr.push(item);
  }

  booksArr.sort(function (a, b) {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  });
}

export { auth, initListenersForAuth, userId, addData, getData };
