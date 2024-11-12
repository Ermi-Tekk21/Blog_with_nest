// src/post/post.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Post, Prisma } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }

  async getPostById(id: number): Promise<Post | null> {
    return this.prisma.post.findUnique({ where: { id } });
  }

  async createPost(data: Prisma.PostCreateInput): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async updatePost(id: number, data: Prisma.PostUpdateInput): Promise<Post> {
    return this.prisma.post.update({
      where: { id },
      data,
    });
  }

  async deletePost(id: number): Promise<Post> {
    return this.prisma.post.delete({ where: { id } });
  }
}
