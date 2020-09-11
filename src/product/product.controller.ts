import { CreateProductDTO } from './dto/create-product.dto';
import { ProductService } from './product.service';
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('product')
@Controller('product')
export class ProductController {

    constructor(
        private service: ProductService) { }

    @Get()
    getMany() {
        return this.service.getMany();
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {

        return this.service.getOne(id);
    }

    @Post()
    createOne(@Body() dto: CreateProductDTO) {
        return this.service.createOne(dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.service.deleteOne(id);
    }
}
