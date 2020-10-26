import { UserDao } from './user.dao';
import { AutoEntity } from './auto.entity';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AutoDao } from './auto.dao';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserEntity, AutoEntity])
    ],
    providers: [UserDao, AutoDao],
    exports: [UserDao, AutoDao]
})
export class DaoModule { }
