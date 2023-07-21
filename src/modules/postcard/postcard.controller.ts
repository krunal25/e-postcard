import { Controller, Post, Body, BadRequestException, UseGuards } from '@nestjs/common';
import { PostcardService } from './postcard.service';
import { Postcard } from './postcard.entity';
import { SuccessResponse } from 'src/core/apiResponse';
import { postcardEnum } from './postcard.enum';
import { JwtAuthGuard } from './../auth/jwt-auth.guard';

@Controller('postcard')
export class PostcardController {
  constructor(private readonly postcardService: PostcardService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPostcard(
    @Body() createPostcard: Postcard,
  ): Promise<SuccessResponse <Postcard | null>> {
    try {
        const postcard =  await this.postcardService.createPostcard(createPostcard);
        return new SuccessResponse(postcardEnum.Postcard_Created, postcard);
    } catch (error: any) {
        throw new BadRequestException(error).message;
    }
  }
}
