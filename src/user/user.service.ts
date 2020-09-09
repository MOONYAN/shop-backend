import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    name: string;
    password: string;
}

@Injectable()
export class UserService {
    private readonly users: User[];

    constructor() {
        this.users = [
            { id: 1, name: 'Alice', password: 'pwd' },
            { id: 2, name: 'Bob', password: 'pwd' }
        ]
    }

    async findOne(name: string): Promise<User> {
        return this.users.find(user => user.name === name);
    }
}
