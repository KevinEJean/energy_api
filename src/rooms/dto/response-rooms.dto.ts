import { ApiProperty } from "@nestjs/swagger";

export class RoomsResponseDto {
    @ApiProperty({ example: 'Gymnase' })
    name!: string;

    @ApiProperty({ example: '2' })
    buildingId!: string;
}