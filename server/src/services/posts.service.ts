import { Post } from "../models/Post";
import { helpperDataSource } from "../database/app-data-source";

const getAllPosts = async (): Promise<Post[] | null> => {
  try {
    const posts = await helpperDataSource.getRepository(Post).find();
    return posts;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};
const getOnePost = async (id: number): Promise<Post | null> => {
  try {
    const post = await helpperDataSource.getRepository(Post).findOneBy({ id });
    return post;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};
const createPost = async (newData: Post): Promise<Post | undefined> => {
  try {
    const post = helpperDataSource.getRepository(Post).create(newData).save();
    return post;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};
const updatePost = async (
  id: number,
  newData: any
): Promise<Post | undefined> => {
  try {
    const oldPost = await helpperDataSource
      .getRepository(Post)
      .findOneBy({ id });
    if (oldPost) {
      const post = await helpperDataSource
        .getRepository(Post)
        .merge(oldPost, newData)
        .save();
      return post;
    }
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};

const removePost = async (id: number) => {
  try {
    const post = await helpperDataSource.getRepository(Post).delete(id);
    return post;
  } catch (error: any) {
    throw { status: 500, message: error?.message || error };
  }
};
export { getAllPosts, getOnePost, createPost, updatePost, removePost };
