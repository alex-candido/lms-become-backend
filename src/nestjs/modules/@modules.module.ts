import { Module } from '@nestjs/common';

import { AuthModule } from './auth-module/auth.module';
import { UsersModule } from './users-module/users.module';

@Module({
  imports: [UsersModule, AuthModule],
})
export class ModulesModule {}
