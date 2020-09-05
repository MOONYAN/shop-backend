import { VendorEntity } from './vendor.entity';
import { CreateVendorDTO } from './dto/create-vendor.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class VendorService {

    constructor(
        @InjectRepository(VendorEntity)
        private repo: Repository<VendorEntity>) { }

    async createOne(dto: CreateVendorDTO): Promise<VendorEntity> {
        return await this.repo.save(dto);
    }

    async getOne(id: number): Promise<VendorEntity> {
        return await this.repo.findOne(id);
    }

    async getMany(): Promise<VendorEntity[]> {
        return await this.repo.find();
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}
