import { ApiProperty } from "@nestjs/swagger";

export class RoomsResponseDto {
    name!: string;
    buildingId!: string;
}