import { Injectable, ConflictException } from '@nestjs/common';
import { UserRepository } from 'src/data/repositories/UserRepository.service';
import { User } from '../entities/User';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async createUser(userData: any) {
    const user = new User(userData.name, userData.email, userData.password);

    const verifyUser = await this.userRepository.getByEmail(user.email);
    if (verifyUser)
      throw new ConflictException('Esse usuario já possui uma conta!');

    await user.hash_password();

    return this.userRepository.createUser(user);
  }

  async listUsers() {
    return await this.userRepository.listUsers();
  }
}
