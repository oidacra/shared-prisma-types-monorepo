import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// This is just a test controller to get the posts
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getPosts() {
    return this.appService.getAllPosts();
  }
}
