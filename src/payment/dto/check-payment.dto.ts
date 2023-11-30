import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CheckPaymentDto {
  @ApiProperty({ example: '1232sd2121-00asda-sd27asf7-asd21213456' })
  @IsNotEmpty()
  readonly paymentId: number;
}
