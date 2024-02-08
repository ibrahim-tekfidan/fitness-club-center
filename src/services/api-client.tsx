import axios from 'axios';

export default axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '99d3113895mshb768def262656fbp1fae32jsn6420b847ca49',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
