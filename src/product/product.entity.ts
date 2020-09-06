import { VendorEntity } from './../vendor/vendor.entity';
import { StyleEntity } from './../style/style.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity('products')
export class ProductEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;    

    @Column()
    photo: string;

    @Column()
    price: number;

    @ManyToOne(() => StyleEntity, style => style.id)
    style: StyleEntity;

    @ManyToOne(() => VendorEntity, vendor => vendor.id)
    vendor: VendorEntity;
}
