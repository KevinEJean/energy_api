import { IsString, IsEmail, IsInt } from 'class-validator';

export class createBuildingsDto {
  @IsString()
  name!: string;

  @IsEmail()
  address!: number;

  @IsInt()
  yearBuilt!: number;
}