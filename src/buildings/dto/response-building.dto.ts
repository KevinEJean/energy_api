import { ApiProperty } from "@nestjs/swagger";

export class BuildingResponseDto {
    name!: string;
    address!: string;
    yearBuilt!: number;
}