import { INestApplication, ValidationPipe } from '@nestjs/common';

export function applyGlobalConfig(app: INestApplication) {
  app.enableCors({
    origin: process.env.ORIGIN,
  });
  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422,
    }),
  );
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     forbidNonWhitelisted: true,
  //     transform: true,
  //     errorHttpStatusCode: 422,
  //   }),
  // );
}
