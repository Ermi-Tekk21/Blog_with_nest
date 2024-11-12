// src/post/post.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { PostService } from './post.service';
import { Prisma } from '@prisma/client';

@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return this.postService.getPostById(Number(id));
  }

  @Post()
  async createPost(@Body() data: Prisma.PostCreateInput) {
    return this.postService.createPost(data);
  }

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() data: Prisma.PostUpdateInput) {
    return this.postService.updatePost(Number(id), data);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postService.deletePost(Number(id));
  }
}
