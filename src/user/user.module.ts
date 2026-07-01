import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import {
  Connection,
  MySQLConnection,
  PostgreSQLConnection,
} from './connection/connection';

console.log('DATABASE =', process.env.DATABASE);

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    {
      provide: Connection,
      useClass:
        process.env.DATABASE == 'postgres'
          ? PostgreSQLConnection
          : MySQLConnection,
    },
  ],
})
export class UserModule {}
