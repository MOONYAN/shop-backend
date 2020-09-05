import { ApiProperty } from "@nestjs/swagger";

export class CreateStyleDTO {

    readonly id: number;

    @ApiProperty()
    readonly name: string;
}