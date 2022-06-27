import { getPost, createPost, removePost } from "./ApiService";

/** Endponits */
const url = "http://localhost:5000/api";

export const getAllPosts = async () => {
  try {
    let response = await getPost(`${url}/posts`);
    return response;
  } catch (err) {
    throw err;
  }
};
export const addNewPost = async (newPost: any) => {
  try {
    let response = await createPost(`${url}/post`, newPost);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getOne = async () => {
  try {
    let response = await getPost(url);
    return response;
  } catch (err) {
    throw err;
  }
};

export const deletePost = async (id: number) => {
  try {
    let response = await removePost(`${url}/post/${id}`);
    return response;
  } catch (err) {
    throw err;
  }
};
