import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

import { CONFIG_SCHEMA_TYPE } from '@nest/@share/env/env.module';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users-module/users.service';
import { LoginDto } from './dtos/login.dto';

const EXPIRE_TIME = 20 * 1000;

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService<CONFIG_SCHEMA_TYPE>,
  ) {}

  async login(dto: LoginDto) {
    const user = await this.validateUser(dto);

    const payload = {
      username: user.email,
      sub: {
        name: user.name,
      },
    };

    return {
      ...user,
      backendTokens: {
        accessToken: await this.jwtService.signAsync(payload, {
          expiresIn: '20s',
          secret: this.configService.get('NESTAUTH_JWT_SECRET'),
        }),
        refreshToken: await this.jwtService.signAsync(payload, {
          expiresIn: '7d',
          secret: this.configService.get('NESTAUTH_JWT_REFRESH_SECRET'),
        }),
        expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
      },
    };
  }

  async validateUser(dto: LoginDto) {
    const user = await this.userService.findByEmail(dto.email);

    if (user && (await compare(dto.password, user.password))) {
      const { password: _password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException();
  }

  async refreshToken(user: any) {
    const payload = {
      username: user.username,
      sub: user.sub,
    };

    return {
      accessToken: await this.jwtService.signAsync(payload, {
        expiresIn: '20s',
        secret: this.configService.get('NESTAUTH_JWT_SECRET'),
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: this.configService.get('NESTAUTH_JWT_REFRESH_SECRET'),
      }),
      expiresIn: new Date().setTime(new Date().getTime() + EXPIRE_TIME),
    };
  }
}
