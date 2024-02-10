import axios from 'axios';

export default axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com/exercises',
  headers: {
    'X-RapidAPI-Key': '39abc15c16msh88aecd2c39ff68bp17fdebjsn295400e7be8b',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
});
