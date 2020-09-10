import { jwtConstant, hashConstant } from './constants';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './../user/user.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local/local.strategy';
import { JwtStrategy } from './jwt/jwt.strategy';
import { AuthController } from './auth.controller';
import { HashService } from './hash.service';


@Module({
  imports: [UserModule, PassportModule, JwtModule.register({
    secret: jwtConstant.secret,
    signOptions: { expiresIn: jwtConstant.expiresIn }
  })],
  providers: [
    AuthService,
    HashService,
    LocalStrategy,
    JwtStrategy,
    { provide: 'HASH_ROUND', useValue: hashConstant.hashRound }],
  exports: [AuthService],
  controllers: [AuthController]
})
export class AuthModule { }