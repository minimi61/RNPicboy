import axios from 'axios';
const baseURL = process.env.API_KEY;

export async function getCompleteData() {
  return await axios.get(`${baseURL}/post/gif/0/1?page=1&size=6`);
  //   return await axios.get(`${baseURL}/main/best-top10`);
}
