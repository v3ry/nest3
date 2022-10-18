import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private appService: UsersService) {}

  @Get()
  getAll() {
    return this.appService.getUsers();
  }

  @Get(':id')
  get(@Param() params) {
    return this.appService.getUser(params.id);
  }

  @Post()
  create(@Body() user: User) {
    return this.appService.saveUser(user);
  }

  @Put()
  update(@Body() user: User) {
    return this.appService.saveUser(user);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    this.appService.deleteUser(params.id);
    return;
  }
}
