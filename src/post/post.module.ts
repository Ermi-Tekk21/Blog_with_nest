// post.module.ts
import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Import PrismaModule

@Module({
  imports: [PrismaModule], // Import PrismaModule here
  providers: [PostService],
  controllers: [PostController],
})
export class PostModule {}
