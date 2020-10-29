import { StyleEntity } from './../style/style.entity';
import { VendorEntity } from './../vendor/vendor.entity';
import { CreateProductDTO } from './dto/create-product.dto';
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private repo: Repository<ProductEntity>,
        @InjectRepository(VendorEntity)
        private vendorRepo: Repository<VendorEntity>,
        @InjectRepository(StyleEntity)
        private styleRepo: Repository<StyleEntity>) { }

    async createOne(dto: CreateProductDTO): Promise<ProductEntity> {

        const [vendor, style] = await Promise.all([
            this.vendorRepo.findOne(dto.vendorId),
            this.styleRepo.findOne(dto.styleId)
        ]);

        if(vendor === undefined || style === undefined){
            throw new BadRequestException();
        }

        return await this.repo.save({
            name: dto.name,
            photo: dto.photo,
            price: dto.price,
            style: style,
            vendor: vendor
        } as ProductEntity);
    }

    async getOne(id: number): Promise<ProductEntity> {
        const product = await this.repo.findOne(id);
        if(product === undefined){
            throw new BadRequestException()
        }
        return product;
    }

    async getMany(): Promise<ProductEntity[]> {
        return await this.repo.find();
    }

    async deleteOne(id: number): Promise<DeleteResult> {
        return await this.repo.delete(id);
    }
}
