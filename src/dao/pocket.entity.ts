import { CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AutoEntity } from './auto.entity';

@Entity('pocket')
export class PocketEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => AutoEntity, auto => auto.pockets, { eager: true, cascade: true })
    @JoinTable()
    autos: AutoEntity[];

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}