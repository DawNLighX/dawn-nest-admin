import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { APP_GUARD } from '@nestjs/core'; // 全局注册 Guard
import { AuthGuard } from './auth.guard';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AuthController],
  providers: [
    AuthService, // 用户认证服务
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // guard 全局注册
    },
  ],
})
export class AuthModule {}
