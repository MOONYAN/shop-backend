import { DaoModule } from './../dao/dao.module';
import { Module } from '@nestjs/common';
import { PocketController } from './pocket.controller';
import { PocketService } from './pocket.service';

@Module({
  imports: [DaoModule,],
  controllers: [PocketController],
  providers: [PocketService]
})
export class PocketModule { }
