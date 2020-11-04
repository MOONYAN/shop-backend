import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConnectionService } from "./shared/services/database-connection.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DaoModule } from './dao/dao.module';
import { AutoModule } from './auto/auto.module';
import { PocketModule } from './pocket/pocket.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: DatabaseConnectionService
    }),
    AuthModule,
    DaoModule,
    AutoModule,
    PocketModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
