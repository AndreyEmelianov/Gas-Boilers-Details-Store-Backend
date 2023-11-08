import { ApiProperty } from '@nestjs/swagger';

export class LoginUserRequest {
  @ApiProperty({ example: 'Vasya' })
  username: string;

  @ApiProperty({ example: 'Vasya1234' })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      user: {
        userId: 1,
        username: 'Vasya',
        email: 'Vasya@gamil.com',
      },
    },
  })
  user: {
    userId: number;
    username: string;
    email: string;
  };

  @ApiProperty({ example: 'Logged in' })
  message: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: 'Session has ended' })
  message: string;
}

export class LoginCheckUserResponse {
  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 'Vasya' })
  username: string;

  @ApiProperty({ example: 'Vasya@gamil.com' })
  email: string;
}

export class SignupUserResponse {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Vasya' })
  username: string;

  @ApiProperty({ example: 'Vasya@gamil.com' })
  email: string;

  @ApiProperty({ example: '$2asd21fdsfsdf23r$sdqggjkjijoiwf2123....' })
  password: string;

  @ApiProperty({ example: '2023-08-11T11:23:33.502Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-08-11T11:23:33.502Z' })
  updatedAt: string;
}
