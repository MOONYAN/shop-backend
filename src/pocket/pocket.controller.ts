import { DetachAutoDto } from './dto/detach-auto.dto';
import { AttachAutoDto } from './dto/attach-auto.dto';
import { ValidUser } from './../auth/interface/valid-user.interface';
import { PocketService } from './pocket.service';
import { JwtAuthGuard } from './../auth/jwt/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/auth/current-user.decorator';
import { ResPocketDto } from './interface/res-pocket.dto';

@UseGuards(JwtAuthGuard)
@ApiTags('pocket')
@Controller('pocket')
export class PocketController {

    constructor(private pocketService: PocketService) { }

    @Get()
    getOne(@CurrentUser() validUser: ValidUser): Promise<ResPocketDto> {
        return this.pocketService.getOneByUser(validUser.id);
    }

    @Post('auto')
    attachAuto(@CurrentUser() validUser: ValidUser, @Body() dto: AttachAutoDto): Promise<ResPocketDto> {
        dto.userId = validUser.id;
        return this.pocketService.attachAuto(dto);
    }

    @Delete('auto/:id')
    detachAuto(@CurrentUser() validUser: ValidUser, @Param('id') autoId: number): Promise<ResPocketDto> {
        const dto = { userId: validUser.id, autoId: autoId } as DetachAutoDto;
        return this.pocketService.detachAuto(dto);
    }
}