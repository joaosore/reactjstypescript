import axios from 'axios';

const hostName = window.location.hostname;
let url = 'http://localhost:3001';

switch (hostName) {
  case 'hml.cms.checkout.medway.com.br':
    url = 'https://hml.api.checkout.medway.com.br';
    break;
  case 'cms.checkout.medway.com.br':
    url = 'https://api.checkout.medway.com.br';
    break;
  default:
    break;
}

const token = localStorage.getItem('token');

const api = axios.create({
  baseURL: url,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
