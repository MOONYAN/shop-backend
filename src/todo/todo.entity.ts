import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('todos')
export class TodoEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    title: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column({ type: 'bool', default: false })
    is_done: boolean;

    @CreateDateColumn()
    create_at: Date

    @UpdateDateColumn()
    update_at: Date
}
