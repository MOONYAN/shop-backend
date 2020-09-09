import { LocalAuthGuard } from './auth/local-auth.guard';
import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Body() user){
    return 'pass the guard';
  }
}
