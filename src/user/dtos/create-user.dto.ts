import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Trim } from 'src/common/decorators/trim.decorator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Invalid email address' })
  @IsString({ message: 'Email must be string' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @IsAlphanumeric('en-US', {
    message: 'Password can contain only number and letter',
  })
  @IsString({ message: 'Password must be string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;

  @ApiPropertyOptional()
  @IsString({ message: 'First name must be a string' })
  @IsNotEmpty({ message: 'First name is required' })
  @Trim()
  firstName: string;

  @IsString({ message: 'Last name must be a string' })
  @IsNotEmpty({ message: 'Last name is required' })
  @Trim()
  lastName: string;
}
