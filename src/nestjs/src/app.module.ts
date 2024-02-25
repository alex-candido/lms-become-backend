import { Module } from '@nestjs/common';
import { CacheModule } from './@share/providers/cache.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule.forRoot(), CacheModule],
})
export class AppModule {}
