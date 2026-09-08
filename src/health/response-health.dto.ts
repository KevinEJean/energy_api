import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResponseHealthDto {
  status!: string;
  service!: string;
  timestamp!: Date;
}