import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): string {
    return `User route works! ID: ${id}`;
  }
}
