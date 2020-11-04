import { DetachAutoDto } from './dto/detach-auto.dto';
import { AttachAutoDto } from './dto/attach-auto.dto';
import { AutoEntity } from './../dao/auto.entity';
import { ResPocketDto } from './interface/res-pocket.dto';
import { PocketEntity } from './../dao/pocket.entity';
import { AutoDao } from './../dao/auto.dao';
import { Injectable } from '@nestjs/common';
import { PocketDao } from './../dao/pocket.dao';
import { UserDao } from './../dao/user.dao';
import { ResAutoDto } from './interface/res-autos.dto';

@Injectable()
export class PocketService {

    constructor(
        private userDao: UserDao,
        private pocketDao: PocketDao,
        private autoDao: AutoDao) { }

    async getOneByUser(userId: number): Promise<ResPocketDto> {
        const user = await this.userDao.findOne(userId);
        return this.toDto(user.pocket);
    }

    async attachAuto(dto: AttachAutoDto): Promise<ResPocketDto> {
        const [user, auto] = await Promise.all([
            this.userDao.findOne(dto.userId),
            this.autoDao.getOne(dto.autoId)
        ]);
        const pocket = await this.pocketDao.attachAuto(user.pocket.id, auto);
        return this.toDto(pocket);
    }

    async detachAuto(dto: DetachAutoDto): Promise<ResPocketDto> {
        const user = await this.userDao.findOne(dto.userId);
        const pocket = await this.pocketDao.detachAuto(user.pocket.id, dto.autoId);
        return this.toDto(pocket);
    }

    private toDto(pocket: PocketEntity): ResPocketDto {
        return {
            id: pocket.id,
            autos: pocket.autos.map<ResAutoDto>(auto => this.toResAutoDto(auto))
        }
    }

    private toResAutoDto(auto: AutoEntity): ResAutoDto {
        return {
            id: auto.id,
            name: auto.name,
            acc: auto.acc,
            abs: auto.abs,
            esp: auto.esp
        }
    }
}
