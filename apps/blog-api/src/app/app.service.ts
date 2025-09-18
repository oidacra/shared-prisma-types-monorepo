import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@shared/prisma-generated/client';
import { Post } from '@shared/prisma-generated/types';

@Injectable()
export class AppService {
  private prisma = new PrismaClient();

  async getAllPosts(): Promise<Post[]> {
    return this.prisma.post.findMany();
  }
}
