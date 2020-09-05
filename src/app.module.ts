import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from "./shared/services/database-connection.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { VendorModule } from './vendor/vendor.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    TodoModule,
    VendorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
