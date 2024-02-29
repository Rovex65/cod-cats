import axios from 'axios';

export class BookApi {
  constructor() {
    this.BASE_URL = 'https://books-backend.p.goit.global/books/';
    axios.defaults.baseURL = this.BASE_URL;
  }

  async getCategoryList() {
    const res = await axios.get('category-list');
    return res.data;
  }

  async getTopBooks() {
    const res = await axios.get('top-books');
    return res.data;
  }

  async getBooksByCategory(category) {
    const params = new URLSearchParams({ category });
    const res = await axios.get('category', { params });
    return res.data;
  }

  async getBookById(id) {
    const res = await axios.get(`${id}`);
    return res.data;
  }
}
