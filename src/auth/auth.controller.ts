import { SignupDto } from './dto/signup.dto';
import { ValidUser } from './interface/valid-user.interface';
import { AuthService } from './auth.service';
import { Controller, UseGuards, Post, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local/local-auth.guard';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@CurrentUser() validUser: ValidUser) {
    return this.authService.generateCredencial(validUser);
  }

  @Post('signup')
  async signup(@Body() dto: SignupDto) {
    try {
      return await this.authService.signup(dto);
    } catch ( err ) {
      return err;
    }
  }
}
