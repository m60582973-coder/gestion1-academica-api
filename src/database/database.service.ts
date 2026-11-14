
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPool, Pool } from 'mysql2/promise';

@Injectable()
export class DatabaseService implements OnModuleInit, OnModuleDestroy {
  private connection: Pool;

  constructor(private configService: ConfigService) {
    this.connection = createPool({
      host: this.configService.get<string>('DB_HOST'),
      port: Number(this.configService.get<string>('DB_PORT')),
      user: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
    });
  }

  async onModuleInit() {
    await this.connection.query('SELECT 1');
    console.log('Conexión a MySQL exitosa');
  }

  async onModuleDestroy() {
    await this.connection.end();
  }

  // Método para ejecutar consultas SQL
  async query(sql: string, values: any[] = []): Promise<any> {
    const [results] = await this.connection.execute(sql, values);
    return results;
  }
}
