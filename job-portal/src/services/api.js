import axios from "axios";

export const getJobs = async () => {
  return await axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getJobDetails = async (id) => {
  return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const applyJob = async (data) => {
  return await axios.post("https://jsonplaceholder.typicode.com/posts", data);
};
