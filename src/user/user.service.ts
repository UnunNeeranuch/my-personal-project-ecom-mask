import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from 'src/database/prisma.service';
import { User } from 'src/database/generated/prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = 'zxs';
    return this.prisma.user.create({
      data: { ...createUserDto, password: hashedPassword },
    });
  }
}
