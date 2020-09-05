import { CreateStyleDTO } from './dto/create-style.dto';
import { StyleEntity } from './style.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class StyleService {

    constructor(
        @InjectRepository(StyleEntity)
        private repo: Repository<StyleEntity>) { }

    async createOne(dto:CreateStyleDTO): Promise<StyleEntity> {
        return await this.repo.save(dto);
    }

    async getOne(id:number):Promise<StyleEntity>{
        return await this.repo.findOne(id);
    }

    async getMany():Promise<StyleEntity[]>{
        return await this.repo.find();
    }

    async deleteOne(id:number):Promise<DeleteResult>{
        return await this.repo.delete(id);
    }
}
