"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PostService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var data_lib_1 = require("@nxnestmicro/data-lib");
var class_transformer_1 = require("class-transformer");
var PostService = /** @class */ (function () {
    function PostService(postModel) {
        this.postModel = postModel;
    }
    PostService.prototype.create = function (createPostDto) {
        var post = class_transformer_1.plainToClass(data_lib_1.PostDocument, createPostDto);
        //this.postRepository.create(post);
        //this is crucial
        return this.postModel.create(post);
    };
    PostService.prototype.findAll = function () {
        return this.postModel.find().exec();
    };
    PostService.prototype.findOne = function (id) {
        return this.postModel.find({ id: id }).exec();
    };
    PostService.prototype.remove = function (id) {
        return this.postModel.remove({ id: id }).exec();
    };
    PostService = __decorate([
        common_1.Injectable(),
        __param(0, mongoose_1.InjectModel('posts'))
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
