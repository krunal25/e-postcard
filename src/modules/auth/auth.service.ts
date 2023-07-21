import { InjectRepository } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: Repository<Auth>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<Auth | null> {
    const user = await this.userRepository.findOne({
        where: {
            username: username
        }
    });
    if(!user) throw new BadRequestException({ error : "Userr Not Found" });

    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: Auth): Promise<{ access_token: string }> {

    const payload = { sub: user.id, email: user.email };
    const access_token = this.jwtService.sign(payload);

    return { access_token };
  }
}