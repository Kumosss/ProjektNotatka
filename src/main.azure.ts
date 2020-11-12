import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('api');
  await app.init();

  console.log(`Server is running on: ${await app.getUrl()}`);

  return app;
}
