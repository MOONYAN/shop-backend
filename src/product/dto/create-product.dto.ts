import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDTO {

    readonly id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly photo: string;

    @ApiProperty()
    readonly price: number;

    @ApiProperty()
    readonly styleId: number;

    @ApiProperty()
    readonly vendorId: number;
}