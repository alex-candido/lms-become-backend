import { DynamicModule, Module } from '@nestjs/common';
import {
  ConfigModuleOptions,
  ConfigModule as NestConfigModule,
} from '@nestjs/config';
import * as Joi from 'joi';
import { join } from 'path';

type DB_SCHEMA_TYPE = {
  DATABASE_URL: string;
  API_PORT: number;
  ORIGIN: string;
  CLOUDINARY_URL: string;
  CLOUDINARY_CLOUD_NAME: string;
  CLOUDINARY_API_KEY: number;
  CLOUDINARY_API_SECRET: string;
  REDIS_URL: string;
  REDIS_HOST: string;
  REDIS_PORT: number;
  REDIS_PASS: string;
  REDIS_USER: string;
};

export const CONFIG_DB_SCHEMA: Joi.StrictSchemaMap<DB_SCHEMA_TYPE> = {
  DATABASE_URL: Joi.string().required(),
  API_PORT: Joi.number().required(),
  ORIGIN: Joi.string().required(),
  CLOUDINARY_URL: Joi.string().required(),
  CLOUDINARY_CLOUD_NAME: Joi.string().required(),
  CLOUDINARY_API_KEY: Joi.number().required(),
  CLOUDINARY_API_SECRET: Joi.string().required(),
  REDIS_URL: Joi.string().required(),
  REDIS_HOST: Joi.string().required(),
  REDIS_PORT: Joi.number().required(),
  REDIS_PASS: Joi.string().required(),
  REDIS_USER: Joi.string().required(),
};

export type CONFIG_SCHEMA_TYPE = DB_SCHEMA_TYPE;

@Module({})
export class ConfigModule extends NestConfigModule {
  static forRoot(options: ConfigModuleOptions = {}): DynamicModule {
    const { envFilePath, ...otherOptions } = options;

    return super.forRoot({
      isGlobal: true,
      envFilePath: [
        ...(Array.isArray(envFilePath) ? envFilePath! : [envFilePath!]),
        join(process.cwd(), 'envs', `.env.${process.env.NODE_ENV!}`),
        join(process.cwd(), 'envs', `.env`),
      ],
      validationSchema: Joi.object({
        ...CONFIG_DB_SCHEMA,
      }),
      ...otherOptions,
    });
  }
}
