import { jwtConstant } from './constants';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { JwtStrategy } from './jwt/jwt.strategy';


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: { expiresIn: '300s' }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
