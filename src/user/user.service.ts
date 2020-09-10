import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private repo: Repository<UserEntity>) { }

    async create(dto: CreateUserDto): Promise<UserEntity> {
        return await this.repo.save(dto);
    }

    async findOne(id: number): Promise<UserEntity> {
        return await this.repo.findOne(id);
    }

    async find(email: string): Promise<UserEntity> {
        return await this.repo.findOne({ where: { email: email } });
    }
}
