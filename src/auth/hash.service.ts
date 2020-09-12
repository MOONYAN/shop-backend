import { Injectable } from '@nestjs/common';
import { hash, compare } from "bcrypt";

@Injectable()
export class HashService {

    private readonly HASH_ROUNDS: number = 10;

    async hashCode(plaintext: string): Promise<string> {
        return hash(plaintext, this.HASH_ROUNDS);
    }

    async compareCode(plaintext: string, code: string): Promise<boolean> {
        return compare(plaintext, code);
    }
};