import { jwtConstant } from '../constants';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstant.secret
        });
    }

    async validate(payload: { sub: number, username: string }) {
        return {
            userId: payload.sub,
            username: payload.username
        };
    }
}