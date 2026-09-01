import { IsDate, IsString } from 'class-validator';

export class CreateRoomsDto {
    @IsString()
    category:string;

    @IsString()
    capacity:string;

    @IsDate()
    createdAt:Date
}