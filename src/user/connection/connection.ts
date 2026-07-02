import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export class Connection {
  getName(): string {
    return '';
  }
}

@Injectable()
export class MySQLConnection extends Connection {
  getName(): string {
    return 'MySQL';
  }
}

@Injectable()
export class PostgreSQLConnection extends Connection {
  getName(): string {
    return 'PostgreSQL';
  }
}

export function createConnection(configSerivice: ConfigService): Connection {
  if (configSerivice.get('DATABASE') === 'mysql') {
    return new MySQLConnection();
  } else {
    return new PostgreSQLConnection();
  }
}
