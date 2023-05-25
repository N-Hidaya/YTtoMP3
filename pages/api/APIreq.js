import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: process.env.NEXT_ID},
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_API_KEY,
    'X-RapidAPI-Host': process.env.NEXT_API_HOST
  }
};

const fetch = async (id) => {
    options.params = {id};
    const response = await axios.request(options);
    return response;
}

export {fetch};