import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private repo: Repository<UserEntity>) { }

    async create(dto: CreateUserDto): Promise<UserEntity> {
        const user = this.repo.create();
        user.email = dto.email;
        user.password = dto.password;
        return await this.repo.save(user);
    }

    async findOne(id: number): Promise<UserEntity> {
        const user = await this.repo.findOne(id);
        if (user === undefined) {
            throw new BadRequestException();
        }
        return user;
    }

    async findOneByEmail(email: string): Promise<UserEntity> {
        const user = await this.repo.findOne({ where: { email: email } });
        if (user === undefined) {
            throw new BadRequestException();
        }
        return user;
    }

    async exist(email: string): Promise<boolean> {
        const users = await this.repo.find({ where: { email: email } });
        return users.length > 0;
    }
}
