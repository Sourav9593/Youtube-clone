import axios from 'axios';

const BASE_URL = "https://youtube138.p.rapidapi.com"
const first_api_key = "8ad3766c2emsh4b3b114203e1d3dp1bb145jsnf53bae339ebe"
const second_api_key = "7adf7de8b4msh56b078f83ae719ep1cf81fjsn5dbf8c965cad"
const third_api_key = "784457a4e6msh9fee3f28b6517bbp1edfb2jsnecdfa66076b2"

const options = {
    params: {hl: 'en', gl: 'US'},
    headers: {
      'X-RapidAPI-Key': '7adf7de8b4msh56b078f83ae719ep1cf81fjsn5dbf8c965cad' ,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  export const fetchDataFromApi = async (url)=>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
  }