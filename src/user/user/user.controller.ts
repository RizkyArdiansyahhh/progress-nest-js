import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('api/users')
export class UserController {
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
