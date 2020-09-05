import { CreateStyleDTO } from './dto/create-style.dto';
import { StyleService } from './style.service';
import { Controller, Get, Param, Post, Body, Delete } from '@nestjs/common';

@Controller('style')
export class StyleController {

    constructor(
        private service: StyleService) { }

    @Get()
    getMany() {
        return this.service.getMany();
    }

    @Get(':id')
    getOne(@Param('id') id: number) {
        return this.service.getOne(id);
    }

    @Post()
    createOne(@Body() dto: CreateStyleDTO) {
        return this.service.createOne(dto);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.service.deleteOne(id);
    }
}
