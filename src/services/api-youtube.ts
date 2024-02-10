import axios from 'axios';

export default axios.create({
  baseURL: 'https://youtube-search-and-download.p.rapidapi.com/search',
  params: {
    hl: 'en',
    gl: 'US',
  },
  headers: {
    'X-RapidAPI-Key': '7768d3dbe0msh608aabc63d0f2adp1fc84ajsnf43120114826',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
});
