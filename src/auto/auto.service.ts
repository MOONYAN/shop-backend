import { DeleteResult } from 'typeorm';
import { AutoEntity } from './../dao/auto.entity';
import { ResAutoDto } from './interface/res-auto.dto';
import { AutoDao } from './../dao/auto.dao';
import { Injectable } from '@nestjs/common';
import { CreateAutoDto } from './dto/create-auto.dto';

@Injectable()
export class AutoService {

    constructor(private autoDao: AutoDao) { }

    async createOne(dto: CreateAutoDto): Promise<ResAutoDto> {

        const auto = await this.autoDao.createOne(dto.name, dto.photo, dto.acc, dto.abs);
        return this.toDto(auto);
    }

    async getOne(id: number): Promise<ResAutoDto> {

        const auto = await this.autoDao.getOne(id);
        return this.toDto(auto);
    }

    async getMany(): Promise<ResAutoDto[]> {

        const autos = await this.autoDao.getMany();
        return autos.map<ResAutoDto>(auto => this.toDto(auto));
    }

    async deleteOne(id: number): Promise<DeleteResult> {

        return await this.autoDao.deleteOne(id);
    }

    private toDto(auto: AutoEntity): ResAutoDto {

        return {
            id: auto.id,
            name: auto.name,
            photo: auto.photo,
            acc: auto.acc,
            abs: auto.abs
        }
    }
}
