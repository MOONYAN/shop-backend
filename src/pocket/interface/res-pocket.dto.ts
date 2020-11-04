import { ResAutoDto } from './res-autos.dto';

export interface ResPocketDto {
    readonly id: number;
    readonly autos: ResAutoDto[];
}