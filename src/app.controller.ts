import { JwtAuthGuard } from './auth/jwt/jwt-auth.guard';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { Controller, Get, Post, UseGuards, Body, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './auth/user.decorator';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @UseGuards(LocalAuthGuard)
  @Post('/auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@User() user){
    return user;
  }
}
