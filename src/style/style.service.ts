import { CreateStyleDTO } from './dto/create-style.dto';
import { StyleEntity } from './style.entity';
import { Injectable, BadRequestException } from '@nestjs/common';
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
        const style = await this.repo.findOne(id);
        if(style === undefined){
            throw new BadRequestException();
        }
        return style;
    }

    async getMany():Promise<StyleEntity[]>{
        return await this.repo.find();
    }

    async deleteOne(id:number):Promise<DeleteResult>{
        return await this.repo.delete(id);
    }
}
