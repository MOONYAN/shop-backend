import { ApiProperty } from "@nestjs/swagger";

export class CreateAutoDto {

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly photo: string;

    @ApiProperty()
    readonly acc: string;

    @ApiProperty()
    readonly abs: boolean;
}