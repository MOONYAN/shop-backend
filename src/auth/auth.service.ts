import { UserDao } from './../dao/user.dao';
import { UnauthorizedException } from '@nestjs/common';
import { ValidUser } from './interface/valid-user.interface';
import { UserEntity } from '../dao/user.entity';
import { SignupDto } from './dto/signup.dto';
import { Payload } from './jwt/payload.interface';
import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from "@nestjs/jwt";
import { HashService } from './hash.service';
import { Credencial } from './interface/credencial.interface';

@Injectable()
export class AuthService {

    constructor(
        private userDao: UserDao,
        private hashService: HashService,
        private jwtService: JwtService) { }

    async validateUser(email: string, password: string): Promise<UserEntity> {
        const user = await this.userDao.findOneByEmail(email);
        const match = await this.hashService.compareCode(password, user.password);
        if (!match) {
            throw new UnauthorizedException();
        }
        return user;
    }

    async signup(dto: SignupDto): Promise<ValidUser> {
        const isExistUser = await this.userDao.exist(dto.email);
        if (isExistUser) {
            throw new BadRequestException();
        }
        return this.createValidUser(dto);
    }

    private async createValidUser(dto: SignupDto): Promise<ValidUser> {

        const code = await this.hashService.hashCode(dto.password);
        const user = await this.userDao.createOne(dto.email, code);

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