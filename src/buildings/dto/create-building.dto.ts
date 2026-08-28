import { IsString, IsEmail, IsInt, Min, Length } from 'class-validator';

export class createBuildingsDto {  
    @IsString()
    name!: string;
  
    @IsEmail()
    address!: number;

    @IsInt()
    yearBuilt!: number;
  }