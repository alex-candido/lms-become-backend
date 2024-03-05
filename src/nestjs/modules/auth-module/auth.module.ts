import { Module } from '@nestjs/common';

import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { CacheModule } from '@nest/@share/cache/cache.module';
import { PrismaModule } from '@nest/@share/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users-module/users.service';

@Module({
  controllers: [AuthController],
  providers: [CacheModule, PrismaModule, AuthService, UsersService, JwtService],
})
export class AuthModule {}
