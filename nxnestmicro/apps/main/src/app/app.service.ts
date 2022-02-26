import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getProjectInfo(): { message: string } {
    return {
      message:
        'Welcome to main project! Please use the route/posts to get more of it.',
    };
  }
}
