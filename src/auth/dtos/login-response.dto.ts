import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhOTcyYzNhZC0xMDE0LTQ',
  })
  accessToken: string;

  @ApiProperty()
  user: UserResponseDto;
}
