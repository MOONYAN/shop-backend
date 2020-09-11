import { hashConstant } from './constants';
import { Injectable, Inject } from '@nestjs/common';
import { hash, compare } from "bcrypt";

@Injectable()
export class HashService {

    constructor(@Inject('HASH_ROUND') private hashRound: number) { }

    async hashCode(plaintext: string): Promise<string> {
        return hash(plaintext, this.hashRound);
    }

    async compareCode(plaintext: string, code: string): Promise<boolean> {
        return compare(plaintext, code);
    }
};