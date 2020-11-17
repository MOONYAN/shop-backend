import { PocketDao } from './pocket.dao';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class UserDao {

    constructor(
        @InjectRepository(UserEntity)
        private repo: Repository<UserEntity>,
        private pocketDao: PocketDao) { }

    async createOne(email: string, password: string): Promise<UserEntity> {
        let user = this.repo.create();
        user.email = email;
        user.password = password;
        user.pocket = await this.pocketDao.createOne();
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
        const count = await this.repo.count({ where: { email: email } });
        return count > 0;
    }
}
