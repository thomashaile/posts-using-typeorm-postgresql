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
const app_data_source_1 = require("./app-data-source");
const db_connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield app_data_source_1.helpperDataSource.initialize();
        console.log("database connection established");
    }
    catch (error) {
        console.log("database connection error");
    }
});
exports.default = db_connect;
