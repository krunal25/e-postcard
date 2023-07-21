import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { PostcardController } from './modules/postcard/postcard.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'admin',
    database: 'e-postcard',
    autoLoadEntities: true,
    synchronize: true,
  }), 
  AuthModule,
  PostcardController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
