import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class createBuildingsDto {
  code!: string;
  name!: string;
  address?: string;
  yearBuilt!: number;
}