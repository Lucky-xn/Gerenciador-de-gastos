import { prisma } from 'src/config/db';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  createUser(user) {
    console.log(user.password_hash);
    return prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password_hash: user.password_hash,
      },
    });
  }

  listUsers() {
    return prisma.users.findMany({
      select: {
        name: true,
      },
    });
  }

  getByEmail(email: string) {
    return prisma.users.findUnique({
      where: { email: email },
    });
  }
}
