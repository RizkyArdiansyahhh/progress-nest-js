import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
} from '@nestjs/common';

import type { HttpRedirectResponse } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Get('/sampleResponse')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  sampleresponse(): Record<string, string> {
    return {
      Data: 'Sample Data',
    };
  }

  @Get('/redirect')
  @Redirect()
  redirect(): HttpRedirectResponse {
    return {
      url: '/api/users/sampleResponse',
      statusCode: 301,
    };
  }

  @Get('/:id')
  getById(@Param('id') id: string): string {
    return `Get ${id}`;
  }

  @Get()
  getQuery(@Query('page') page: string): string {
    return `Get ${page}`;
  }

  @Post()
  post(): string {
    return 'POST';
  }

  @Get()
  get(): string {
    return 'GET';
  }
}
