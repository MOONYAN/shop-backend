import { ValidUser } from './interface/valid-user.interface';
import { UserEntity } from './../user/user.entity';
import { CreateUserDto } from './../user/dto/create-user.dto';
import { SignupDto } from './dto/signup.dto';
import { Payload } from './jwt/payload.interface';
import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from "@nestjs/jwt";
import { HashService } from './hash.service';
import { Credencial } from './interface/credencial.interface';

@Injectable()
export class AuthService {

    constructor(
        private hashService: HashService,
        private userService: UserService,
        private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<UserEntity> {
        const user = await this.userService.find(email);
        const match = await this.hashService.compareCode(password, user.password);
        return match ? user : null;
    }

    async signup(dto: SignupDto): Promise<ValidUser> {
        if (await this.userService.exist(dto.email)) {
            throw `try to sign up exist user: ${dto.email} !`;
        }
        return this.createValidUser(dto);
    }

    private async createValidUser(dto: SignupDto): Promise<ValidUser> {

        const creatUserDto: CreateUserDto = {
            email: dto.email,
            password: await this.hashService.hashCode(dto.password)
        };

        const user = await this.userService.create(creatUserDto);

        return {
            id: user.id,
            email: user.email
        } as ValidUser;
    }

    generateCredencial(dto: ValidUser): Credencial {

        const payload: Payload = {
            sub: dto.id,
            email: dto.email
        }

        const credencial: Credencial = {
            access_token: this.jwtService.sign(payload)
        }
        return credencial;
    }
}