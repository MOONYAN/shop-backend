import { DeleteResult } from 'typeorm';
import { JwtAuthGuard } from './../auth/jwt/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ValidAutoDto } from './interface/valid-auto.dto';
import { Body, Controller, Get, Post, Param, UseGuards, Delete } from '@nestjs/common';
import { AutoService } from './auto.service';
import { CreateAutoDto } from './dto/create-auto.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('auto')
@Controller('auto')
export class AutoController {

    constructor(private autoService: AutoService) { }

    @Post()
    createOne(@Body() dto: CreateAutoDto): Promise<ValidAutoDto> {
        return this.autoService.createOne(dto);
    }

    @Get(':id')
    getOne(@Param('id') id: number): Promise<ValidAutoDto> {
        return this.autoService.getOne(id);
    }

    @Get()
    getMany(): Promise<ValidAutoDto[]> {
        return this.autoService.getMany();
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number):Promise<DeleteResult> {
        return this.autoService.deleteOne(id);
    }
}
