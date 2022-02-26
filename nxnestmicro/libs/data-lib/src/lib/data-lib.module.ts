import { Module } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './entities/post.entity';

@Module({
  controllers: [],
  providers: [Post, CreatePostDto],
  exports: [Post, CreatePostDto],
})
export class DataLibModule {}
