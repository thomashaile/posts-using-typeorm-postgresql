"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePost = exports.updatePost = exports.createPost = exports.getOnePost = exports.getAllPosts = void 0;
const Post_1 = require("../models/Post");
const app_data_source_1 = require("../database/app-data-source");
const getAllPosts = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield app_data_source_1.helpperDataSource.getRepository(Post_1.Post).find();
        return posts;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
});
exports.getAllPosts = getAllPosts;
const getOnePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield app_data_source_1.helpperDataSource.getRepository(Post_1.Post).findOneBy({ id });
        return post;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
});
exports.getOnePost = getOnePost;
const createPost = (newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = app_data_source_1.helpperDataSource.getRepository(Post_1.Post).create(newData).save();
        return post;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
});
exports.createPost = createPost;
const updatePost = (id, newData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const oldPost = yield app_data_source_1.helpperDataSource
            .getRepository(Post_1.Post)
            .findOneBy({ id });
        if (oldPost) {
            const post = yield app_data_source_1.helpperDataSource
                .getRepository(Post_1.Post)
                .merge(oldPost, newData)
                .save();
            return post;
        }
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
});
exports.updatePost = updatePost;
const removePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield app_data_source_1.helpperDataSource.getRepository(Post_1.Post).delete(id);
        return post;
    }
    catch (error) {
        throw { status: 500, message: (error === null || error === void 0 ? void 0 : error.message) || error };
    }
});
exports.removePost = removePost;
