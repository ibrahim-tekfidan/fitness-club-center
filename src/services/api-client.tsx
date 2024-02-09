import axios from 'axios';

export default axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': 'a6b5070abcmsh4b90b2e47e48e05p117a30jsn5e39f9635645',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
