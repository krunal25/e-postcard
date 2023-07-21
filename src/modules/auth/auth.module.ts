import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Auth } from './auth.entity';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthModule } from './jwt.module';

@Module({
    imports: [TypeOrmModule.forFeature([Auth]), JwtAuthModule],
    controllers :[AuthController],
    providers: [AuthService],
    exports: [AuthService]
})

export class AuthModule{}