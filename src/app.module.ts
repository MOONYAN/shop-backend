import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from "./shared/services/database-connection.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoModule } from './todo/todo.module';
import { VendorModule } from './vendor/vendor.module';
import { StyleModule } from './style/style.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { DaoModule } from './dao/dao.module';
import { AutoModule } from './auto/auto.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConnectionService
    }),
    TodoModule,
    VendorModule,
    StyleModule,
    ProductModule,
    AuthModule,
    DaoModule,
    AutoModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
