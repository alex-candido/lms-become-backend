import { Module } from '@nestjs/common';

import { ConfigModule } from '@nest/@share/env/env.module';

import { PrismaModule } from '@nest/@share/database/prisma/prisma.module';
import { ModulesModule } from '@nest/modules/@modules.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ModulesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
