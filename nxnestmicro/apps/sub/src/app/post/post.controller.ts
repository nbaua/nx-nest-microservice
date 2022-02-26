import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: any) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  //Micro Service Event
  @EventPattern('main_posts_event')
  async OnGetAllPostsEvent(data: any) {
    console.log(data.ToString());
  }
}
