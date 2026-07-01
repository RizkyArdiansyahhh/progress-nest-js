import * as common from '@nestjs/common';

@common.Controller('api/users')
export class UserController {
  @common.Get('/sampleResponse')
  @common.Header('Content-Type', 'application/json')
  @common.HttpCode(200)
  sampleresponse(): Record<string, string> {
    return {
      Data: 'Sample Data',
    };
  }

  @common.Get('/redirect')
  @common.Redirect()
  redirect(): common.HttpRedirectResponse {
    return {
      url: '/api/users/sampleResponse',
      statusCode: 301,
    };
  }

  @common.Get('/:id')
  getById(@common.Param('id') id: string): string {
    return `Get ${id}`;
  }

  @common.Get()
  getQuery(@common.Query('page') page: string): string {
    return `Get ${page}`;
  }

  @common.Post()
  post(): string {
    return 'POST';
  }

  @common.Get()
  get(): string {
    return 'GET';
  }
}
