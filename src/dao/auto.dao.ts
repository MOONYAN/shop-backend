import { BadRequestException, Injectable } from '@nestjs/common';
import { AutoEntity } from './auto.entity';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class AutoDao {

    constructor(
        @InjectRepository(AutoEntity)
        private repo: Repository<AutoEntity>) { }

    async createOne(name: string, photo: string, acc: string, abs: boolean): Promise<AutoEntity> {
        let auto: AutoEntity = this.repo.create();
        auto.name = name;
        auto.photo = photo;
        auto.abs = abs;
        auto.acc = acc;
        return await this.repo.save(auto);
    }

    async getOne(id: number): Promise<AutoEntity> {
        const auto = await this.repo.findOne(id);
        if (auto === undefined) {
            throw new BadRequestException();
        }
        return auto;
    }

    async getMany(): Promise<AutoEntity[]> {
        return await this.repo.find();
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}
