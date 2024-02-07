import axios from 'axios';

export default axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '3b09c0f471msh97a3bb6a911d496p1cb018jsn7f931c991de1',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
