import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
    model: {
        type: TodoEntity
    }
})

@Controller('todo')
export class TodoController implements CrudController<TodoEntity> {
    constructor(public service: TodoService) { }
}
