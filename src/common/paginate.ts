import { ApiProperty } from '@nestjs/swagger';

export class PaginateDTO {
  @ApiProperty({ default: 10 })
  number: number = 10;
  @ApiProperty({ default: 1 })
  page: number = 1;
}