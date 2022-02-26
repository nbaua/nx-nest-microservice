import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostDto, Post } from '@nxnestmicro/data-lib';
import { plainToClass } from 'class-transformer';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>
  ) {}

  create(createPostDto: CreatePostDto) {
    const post = plainToClass(Post, createPostDto);
    this.postRepository.create(post);
    //this is crucial
    return this.postRepository.save(post);
  }

  findAll() {
    return this.postRepository.find();
  }

  findOne(id: number) {
    return this.postRepository.findOne(id);
  }

  remove(id: number) {
    return this.postRepository.softDelete(id);
  }
}
