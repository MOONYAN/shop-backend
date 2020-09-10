import { UserEntity } from './../../user/user.entity';
import { AuthService } from './../auth.service';
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { ValidUser } from '../interface/valid-user.interface';


@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(private authService: AuthService) {
        super({
            usernameField: 'email'
        });
    }

    async validate(username: string, password: string): Promise<ValidUser> {
        const user: UserEntity = await this.authService.validateUser(username, password);
        if (user == null) {
            throw new UnauthorizedException();
        }
        return {
            id: user.id,
            email: user.email
        } as ValidUser;
    }
}