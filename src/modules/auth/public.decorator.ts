import { SetMetadata } from '@nestjs/common';

// 定义一个用于标记公共路由的装饰器
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
