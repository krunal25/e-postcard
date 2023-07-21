import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postcard } from './postcard.entity';
import { PostcardController } from './postcard.controller';
import { PostcardService } from './postcard.service';

@Module({
    imports: [TypeOrmModule.forFeature([Postcard])],
    controllers :[PostcardController],
    providers: [PostcardService],
    exports: [PostcardService]
})

export class PostcardModule{}