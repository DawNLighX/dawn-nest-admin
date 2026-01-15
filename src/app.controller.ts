/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Patch, Delete, Param, Query, Body, UseFilters} from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './exception/http-exception.filter';

@Controller() // Default route controller 路由请求控制器
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @UseFilters(new HttpExceptionFilter())
  getHello(): string {
    return this.appService.getHello();
  }

}