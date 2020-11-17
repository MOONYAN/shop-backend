import { DeleteResult } from 'typeorm';
import { ApiTags } from '@nestjs/swagger';
import { ResAutoDto } from './interface/res-auto.dto';
import { Body, Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { AutoService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';

@ApiTags('auto')
@Controller('auto')
export class AutoController {

    constructor(private autoService: AutoService) { }

    @Post()
    createOne(@Body() dto: CreateAutoDto): Promise<ResAutoDto> {
        return this.autoService.createOne(dto);
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<ResAutoDto> {
        return this.autoService.getOne(id);
    }

    @Get()
    getMany(): Promise<ResAutoDto[]> {
        return this.autoService.getMany();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number):Promise<DeleteResult> {
        return this.autoService.deleteOne(id);
    }
}
