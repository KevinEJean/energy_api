import { IsDate, IsString } from 'class-validator';

export class CreateRoomsDto {
    code!: string;
    buildingId!: string;
    floor: number;
    type?: string;
    capacity?: number;
}