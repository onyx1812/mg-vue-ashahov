import axios from "axios"
const api = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8001';

export default {
  async add(data) {
    let res = await axios.post(api+'/add', {
      headers: {
        'Content-Type': 'application/json'
      },
      params: data
    });
    return res.data;
  },
  async get(data) {
    let res = await axios.post(api+'/get', {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return res.data;
  }
}