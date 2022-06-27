"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const postService = __importStar(require("../services/posts.service"));
const getAllPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield postService.getAllPosts();
        res.status(201).send({ statusText: "OK", data });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .json({ statusText: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
});
exports.getAllPosts = getAllPosts;
const getOnePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).send({
            statusText: "FAILED",
            data: { error: "Parameter ':Id' can not be empty" },
        });
    }
    try {
        const post = yield postService.getOnePost(parseInt(req.params.id));
        res.status(201).send({ statusText: "OK", data: post });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ statusText: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
});
exports.getOnePost = getOnePost;
const createPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    if (!body.firstName ||
        !body.lastName ||
        !body.age ||
        !body.email ||
        !body.phone ||
        !body.category ||
        !body.message) {
        res.status(400).send({
            statusText: "FAILED",
            data: {
                error: "One of the following keys is missing or is empty in request body: 'firstName', 'lastName','age','email','phone','category','message'",
            },
        });
        return;
    }
    try {
        const post = yield postService.createPost(req.body);
        res.status(201).send({ statusText: "Created", data: post });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ statusText: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
});
exports.createPost = createPost;
const updatePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).send({
            statusText: "FAILED",
            data: { error: "Parameter ':Id' can not be empty" },
        });
    }
    try {
        const post = yield postService.updatePost(parseInt(req.params.id), req.body);
        res.status(201).send({ statusText: "Updated", data: post });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ statusText: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
});
exports.updatePost = updatePost;
const removePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.params.id) {
        res.status(400).send({
            statusText: "FAILED",
            data: { error: "Parameter ':Id' can not be empty" },
        });
    }
    try {
        const id = parseInt(req.params.id);
        const data = yield postService.removePost(id);
        res.status(201).send({ status: "Deleted", data });
    }
    catch (error) {
        res
            .status((error === null || error === void 0 ? void 0 : error.status) || 500)
            .send({ statusText: "FAILED", data: { error: (error === null || error === void 0 ? void 0 : error.message) || error } });
    }
});
exports.removePost = removePost;
