import { TodoService } from './todo.service';
import { TodoEntity } from './todo.entity';
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: TodoEntity
    }
})

@ApiTags('todo')
@Controller('todo')
export class TodoController implements CrudController<TodoEntity> {
    constructor(public service: TodoService) { }
}
