import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PostDocument } from '@nxnestmicro/data-lib';
import { plainToClass } from 'class-transformer';

@Injectable()
export class PostService {
  constructor(@InjectModel('posts') private readonly postModel) {}

  create(createPostDto: any) {
    const post = plainToClass(PostDocument, createPostDto);
    //this.postRepository.create(post);
    //this is crucial
    return this.postModel.create(post);
  }

  findAll() {
    return this.postModel.find().exec();
  }

  findOne(id: number) {
    return this.postModel.find({ id }).exec();
  }

  remove(id: number) {
    return this.postModel.remove({ id }).exec();
  }
}
