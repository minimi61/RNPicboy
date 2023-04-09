import axios from 'axios';
const baseURL = process.env.API_KEY;

export async function getCompleteData({status = 1, page = 0}) {
  return await axios.get(`${baseURL}/post/gif/0/${status}?page=${page}&size=6`);
}

export async function getCommentData(postId) {
  return await axios.get(`${baseURL}/comment/${postId}`);
}
