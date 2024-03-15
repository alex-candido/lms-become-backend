import { RefreshJwtGuard } from '@nest/@share/http/guards/refresh.guard';
import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';

import { CreateUserDto } from '../users-module/dtos/create-user.dto';
import { UsersService } from '../users-module/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const login = await this.authService.login(dto);
    return login;
  }

  @UseGuards(RefreshJwtGuard)
  @Post('refresh')
  async refreshToken(@Request() req) {
    console.log('refreshed');

    return await this.authService.refreshToken(req.user);
  }
}
