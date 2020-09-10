import { ValidUser } from '../interface/valid-user.interface';
import { jwtConstant } from '../constants';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from './payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstant.secret
        });
    }

    async validate(payload: Payload): Promise<ValidUser> {
        return {
            id: payload.sub,
            email: payload.email
        } as ValidUser;
    }
}