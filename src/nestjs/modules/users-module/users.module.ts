import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { CacheModule } from '@nest/@share/cache/cache.module';
import { PrismaModule } from '@nest/@share/prisma/prisma.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [UsersController],
  providers: [CacheModule, PrismaModule, UsersService, JwtService],
})
export class UsersModule {}
