import { Module } from '@nestjs/common';
import { UserController } from '../presentation/controllers/userController';
import { CreateUserService } from '../core/use_cases/CreateUser.service';
import { UserRepository } from '../data/repositories/UserRepository.service';

@Module({
  controllers: [UserController],
  providers: [CreateUserService, UserRepository],
  exports: [CreateUserService],
})
export class UserModule {}
