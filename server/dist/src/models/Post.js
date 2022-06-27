"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const typeorm_1 = require("typeorm");
let Post = class Post extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "Id", type: "bigint" }),
    __metadata("design:type", Number)
], Post.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "FirstName", nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "LastName", nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "Age", nullable: false }),
    __metadata("design:type", Number)
], Post.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Email", nullable: true }),
    __metadata("design:type", String)
], Post.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "PhoneNumber", nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Category", nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "Massage", length: 500, nullable: false }),
    __metadata("design:type", String)
], Post.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: "Created_at" }),
    __metadata("design:type", Date)
], Post.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: "Updated_at" }),
    __metadata("design:type", Date)
], Post.prototype, "updatedAt", void 0);
Post = __decorate([
    (0, typeorm_1.Entity)({ name: "Posts" })
], Post);
exports.Post = Post;
