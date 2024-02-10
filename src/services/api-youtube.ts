import axios from 'axios';

export default axios.create({
  baseURL: 'https://youtube-search-and-download.p.rapidapi.com/search',
  headers: {
    'X-RapidAPI-Key': '71436d376cmsh8ba3f5590934cafp11f2eajsn00986e02e042',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
});
