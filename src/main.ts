import { API_DESCRIPTION } from '@nest/@share/resources/constants/routes.constant';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { applyGlobalConfig } from './nestjs/global-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  applyGlobalConfig(app);

  await app.listen(Number(process.env.API_PORT));

  console.log(API_DESCRIPTION(String(process.env.API_PORT)));
}
bootstrap();
