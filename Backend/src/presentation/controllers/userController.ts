import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateUserService } from 'src/core/use_cases/CreateUser.service';

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  async handle(@Body() body: any) {
    return await this.createUserService.createUser(body);
  }

  @Get()
  async teste() {
    return await this.createUserService.listUsers();
  }
}
