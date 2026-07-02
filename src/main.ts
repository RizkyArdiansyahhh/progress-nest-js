import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser('SECRET_KEY'));

  const configService = app.get(ConfigService);

  await app.listen(configService.get('PORT') as string | number);
}
bootstrap();
