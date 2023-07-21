import { InjectRepository } from '@nestjs/typeorm';
import { Postcard } from './postcard.entity';
import { Repository } from 'typeorm';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class PostcardService {
  constructor(
    @InjectRepository(Postcard)
    private readonly postcardRepository: Repository<Postcard>,
  ) {}

  async createPostcard(addPostcard: Postcard): Promise<Postcard | null> {
    try {
      if (addPostcard != null) {
        return await this.postcardRepository.save(addPostcard);
      }
    } catch (error: any) {
        throw new BadRequestException(error).message;
    }
  }

  async searchPostcard(postcardName: string, page: number, limit: number){
    try {
        return await this.postcardRepository
        .createQueryBuilder('Postcard')
        .where('Postcard.recipientName ILIKE :recipientName', { name: `%${postcardName}%` })
        .skip((page - 1) * limit)
        .take(limit)
        .getMany();

    } catch (error: any) {
        
    }
  }
}
