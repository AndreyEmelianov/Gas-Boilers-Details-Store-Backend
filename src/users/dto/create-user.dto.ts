import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Vasya' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: 'Vasya@gmail.com' })
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: 'Vasya1234' })
  @IsNotEmpty()
  readonly password: string;
}
