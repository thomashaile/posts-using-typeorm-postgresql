import { Request, Response } from "express";
import * as postService from "../services/posts.service";

const getAllPosts = async (req: Request, res: Response) => {
  try {
    const data = await postService.getAllPosts();
    res.status(201).send({ statusText: "OK", data });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .json({ statusText: "FAILED", data: { error: error?.message || error } });
  }
};
const getOnePost = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      statusText: "FAILED",
      data: { error: "Parameter ':Id' can not be empty" },
    });
  }
  try {
    const post = await postService.getOnePost(parseInt(req.params.id));
    res.status(201).send({ statusText: "OK", data: post });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ statusText: "FAILED", data: { error: error?.message || error } });
  }
};
const createPost = async (req: Request, res: Response) => {
  const { body } = req;
  if (
    !body.firstName ||
    !body.lastName ||
    !body.age ||
    !body.email ||
    !body.phone ||
    !body.category ||
    !body.message
  ) {
    res.status(400).send({
      statusText: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'firstName', 'lastName','age','email','phone','category','message'",
      },
    });
    return;
  }
  try {
    const post = await postService.createPost(req.body);
    res.status(201).send({ statusText: "Created", data: post });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ statusText: "FAILED", data: { error: error?.message || error } });
  }
};
const updatePost = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      statusText: "FAILED",
      data: { error: "Parameter ':Id' can not be empty" },
    });
  }
  try {
    const post = await postService.updatePost(
      parseInt(req.params.id),
      req.body
    );
    res.status(201).send({ statusText: "Updated", data: post });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ statusText: "FAILED", data: { error: error?.message || error } });
  }
};
const removePost = async (req: Request, res: Response) => {
  if (!req.params.id) {
    res.status(400).send({
      statusText: "FAILED",
      data: { error: "Parameter ':Id' can not be empty" },
    });
  }
  try {
    const id = parseInt(req.params.id);
    const data = await postService.removePost(id);
    res.status(201).send({ status: "Deleted", data });
  } catch (error: any) {
    res
      .status(error?.status || 500)
      .send({ statusText: "FAILED", data: { error: error?.message || error } });
  }
};
export { getAllPosts, getOnePost, createPost, updatePost, removePost };
