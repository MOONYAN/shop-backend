import { DaoModule } from './../dao/dao.module';
import { Module } from '@nestjs/common';
import { AutoController } from './auto.controller';
import { AutoService } from './auto.service';

@Module({
  imports: [DaoModule],
  controllers: [AutoController],
  providers: [AutoService]
})
export class AutoModule { }
