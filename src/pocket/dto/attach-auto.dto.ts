import { ApiProperty } from "@nestjs/swagger";

export class AttachAutoDto {

    userId: number;

    @ApiProperty()
    readonly autoId: number;    
}