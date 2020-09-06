import { ApiProperty } from "@nestjs/swagger";

export class CreateVendorDTO {
    
    readonly id: number;

    @ApiProperty()
    readonly name: string;
}