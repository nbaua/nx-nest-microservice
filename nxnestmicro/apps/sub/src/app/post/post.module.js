"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var data_lib_1 = require("@nxnestmicro/data-lib");
var post_controller_1 = require("./post.controller");
var post_service_1 = require("./post.service");
var PostModule = /** @class */ (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        common_1.Module({
            imports: [mongoose_1.MongooseModule.forFeature([{ name: 'posts', schema: data_lib_1.PostSchema }])],
            controllers: [post_controller_1.PostController],
            providers: [post_service_1.PostService]
        })
    ], PostModule);
    return PostModule;
}());
exports.PostModule = PostModule;
