import axios from 'axios';

export default axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '7768d3dbe0msh608aabc63d0f2adp1fc84ajsnf43120114826',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
