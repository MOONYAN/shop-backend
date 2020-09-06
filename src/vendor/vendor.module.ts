import { VendorEntity } from './vendor.entity';
import { Module } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { VendorController } from './vendor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([VendorEntity])
  ],
  providers: [VendorService],
  controllers: [VendorController]
})
export class VendorModule { }
