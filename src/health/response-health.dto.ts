import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ResponseHealthDto {
  @ApiProperty({ example: 'ok' })
  status!: string;

  @ApiProperty({
    example: 'energy-api',
  })
  service!: string;

  @ApiProperty({ example: '2026-09-04T19:04:16.671Z' })
  timestamp!: Date;
}