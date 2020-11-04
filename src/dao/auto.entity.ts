import { PocketEntity } from './pocket.entity';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('auto')
export class AutoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    acc: string;

    @Column()
    abs: boolean;

    @Column()
    esp: boolean;

    @ManyToMany(() => PocketEntity, pocket => pocket.autos)
    pockets: PocketEntity[];

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}
