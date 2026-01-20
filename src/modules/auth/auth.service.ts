import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import md5 from 'md5';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}
  // 用户认证
  async login(username: string, password: string, id: number) {
    const user = await this.userService.findByUsername(username);

    if (!user) {
      throw new UnauthorizedException('用户不存在');
    }

    let isValid = false;

    if (id <= 12 && id >= 9) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      const inputHash = (md5(password) as string).toUpperCase();
      isValid = inputHash === user.password;
    } else {
      isValid = await bcrypt.compare(password, user.password);
    }

    if (!isValid) {
      throw new UnauthorizedException('密码错误');
    }
    return {
      userId: user.id,
      username: user.username,
      isValid,
    };
  }
}
