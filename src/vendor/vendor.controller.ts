import { VendorService } from './vendor.service';
import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CreateVendorDTO } from './dto/create-vendor.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('vendor')
@Controller('vendor')
export class VendorController {

    constructor(
        private service: VendorService) { }

    @Get()
    getMany() {
        return this.service.getMany();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.service.getOne(id);
    }

    @Post()
    create(@Body() dto: CreateVendorDTO) {
        return this.service.createOne(dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.service.deleteOne(id);
    }

}
