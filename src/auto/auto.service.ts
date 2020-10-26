import { DeleteResult } from 'typeorm';
import { AutoEntity } from './../dao/auto.entity';
import { ValidAutoDto } from './interface/valid-auto.dto';
import { AutoDao } from './../dao/auto.dao';
import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';

@Injectable()
export class AutoService {

    constructor(private autoDao: AutoDao) { }

    async createOne(dto: CreateAutoDto): Promise<ValidAutoDto> {

        const auto = await this.autoDao.createOne(dto.name, dto.acc, dto.abs, dto.esp);
        return this.toDto(auto);
    }

    async getOne(id: number): Promise<ValidAutoDto> {

        const auto = await this.autoDao.getOne(id);
        return this.toDto(auto);
    }

    async getMany(): Promise<ValidAutoDto[]> {

        const autos = await this.autoDao.getMany();
        return autos.map<ValidAutoDto>(auto => this.toDto(auto));
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        
        return await this.autoDao.deleteOne(id);
    }

    private toDto(auto: AutoEntity): ValidAutoDto {

        return {
            id: auto.id,
            name: auto.name,
            acc: auto.acc,
            abs: auto.abs,
            esp: auto.esp
        }
    }
}
