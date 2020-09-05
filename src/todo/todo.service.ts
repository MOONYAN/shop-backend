import { TodoEntity } from './todo.entity';
import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService extends TypeOrmCrudService<TodoEntity> {

    constructor(@InjectRepository(TodoEntity) repo) {
        super(repo);
    }
}
