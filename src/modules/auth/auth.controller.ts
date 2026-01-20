import { Controller, Post, Body } from '@nestjs/common';
import { Public } from './public.decorator';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('login')
  async login(
    @Body() params: { username: string; password: string; id: number },
  ) {
    await this.authService.login(params.username, params.password, params.id);
    return 'Auth route works!';
  }
}
