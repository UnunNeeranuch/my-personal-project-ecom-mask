import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDto {
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

  firstName: string;

  lastName: string;
}
