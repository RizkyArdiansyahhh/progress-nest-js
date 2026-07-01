import {
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';

import type { HttpRedirectResponse } from '@nestjs/common';
import type { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/sayHello/:name')
  sayHello(@Param('name') name: string): string {
    return this.userService.sayHello(name);
  }

  @Get('/setCookie')
  setCookie(@Query('name') name: string, @Res() response: Response) {
    response.cookie('name', name);
    response.status(200).send('Cookie set successfully');
  }

  @Get('/getCookie')
  getCookie(@Req() request: Request) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return request.cookies['name'];
  }

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
