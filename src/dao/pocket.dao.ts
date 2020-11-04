import { PocketEntity } from './pocket.entity';
import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { AutoEntity } from './auto.entity';

@Injectable()
export class PocketDao {

    constructor(
        @InjectRepository(PocketEntity)
        private repo: Repository<PocketEntity>) { }

    async createOne(): Promise<PocketEntity> {
        let pocket = this.repo.create();
        return await this.repo.save(pocket);
    }

    async attachAuto(pocketId: number, auto: AutoEntity): Promise<PocketEntity> {
        let pocket = await this.repo.findOne(pocketId);
        if (pocket === undefined) {
            throw new BadRequestException();
        }
        pocket.autos.push(auto);
        return await this.repo.save(pocket);
    }

    async detachAuto(pocketId: number, autoId: number): Promise<PocketEntity> {
        let pocket = await this.repo.findOne(pocketId);
        if (pocket === undefined) {
            throw new BadRequestException();
        }
        pocket.autos = pocket.autos.filter(auto => auto.id != autoId);
        return await this.repo.save(pocket);
    }
}