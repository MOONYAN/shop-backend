import { StyleEntity } from './../style/style.entity';
import { VendorEntity } from './../vendor/vendor.entity';
import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, VendorEntity, StyleEntity])
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule { }
