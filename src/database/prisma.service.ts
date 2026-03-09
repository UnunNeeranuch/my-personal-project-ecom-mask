import { Injectable } from '@nestjs/common';
import { PrismaClient } from './generated/prisma/client';
import { TypedConfigService } from 'src/config/typed-config.service';
import { PrismaPg } from '@prisma/adapter-pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(private readonly typesConfigService: TypedConfigService) {
    const adapter = new PrismaPg({
      connectionString: typesConfigService.get('DATABASE_URL'),
    });
    super({ adapter });
  }
}
