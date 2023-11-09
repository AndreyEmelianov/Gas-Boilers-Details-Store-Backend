import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MakePaymentDto {
  @ApiProperty({ example: 1500 })
  @IsNotEmpty()
  readonly amount: number;
}
