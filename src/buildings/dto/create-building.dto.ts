import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, IsNotEmpty, MaxLength } from 'class-validator';

export class createBuildingsDto {
  code!: string;
  
  @ApiProperty({
    description: 'Nom public et unique du bâtiment',
    example: 'Pavillon principal',
    maxLength: 100,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name!: string;

  address?: string;

  @ApiProperty({
    description: 'Année de construction',
    example: 1965,
    minimum: 1800,
    maximum: 2026,
  })
  yearBuilt!: number;
}