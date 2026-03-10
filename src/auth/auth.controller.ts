import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dtos/register.dto';
import { ApiBadRequestResponse, ApiBearerAuth, ApiOkResponse, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { LoginDto } from './dtos/login.dto';
import { LoginResponseDto } from './dtos/login-response.dto';
import { CurrentUser } from './decorators/current-user.decorator';
import { JwtPayload } from './types/jwt-payload.type';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<string> {
    await this.authService.register();
    return 'Account created successfully';
  }
    @ApiOkResponse({
    description: 'Successful operation',
    type: LoginResponseDto
  })
  @ApiUnauthorizedResponse({
    description: 'The provided credentials is invalid'
  })
  @ApiBadRequestResponse()
  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{
    accessToken: string;
    user: UserWithoutPassword;
    expiresIn: number;
  }> {
    return this.authService.login(loginDto);
  }

  @ApiBearerAuth()
  @Get('me')
  async getCurrentUser(
    @CurrentUser() user: JwtPayload
  ): Promise<UserWithoutPassword> {
    return this.authService.getCurrentUser(user.sub);
  }
}
}
