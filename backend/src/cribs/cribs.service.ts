import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCribDto } from './dto/create-crib.dto';
import { UpdateCribDto } from './dto/update-crib.dto';
import { Crib } from './entities/crib.entity';

@Injectable()
export class CribsService {
  constructor(
    @InjectRepository(Crib) private cribRepository: Repository<Crib>,
  ) {}

  create(createCribDto: CreateCribDto): Promise<Crib> {
    const newUser = this.cribRepository.create({ ...createCribDto });
    return this.cribRepository.save(newUser);
  }

  findAll(): Promise<Crib[]> {
    return this.cribRepository.find();
  }

  findOne(id: number): Promise<Crib> {
    return this.cribRepository.findOneBy({ id });
  }

  async update(id: number, updateCribDto: UpdateCribDto): Promise<Crib> {
    const user = await this.findOne(id);
    if (user) {
      const updateUser = { id, ...updateCribDto };
      return this.cribRepository.save(updateUser);
    }

    throw new NotFoundException('Data is not available');
  }

  async remove(id: number): Promise<void> {
    await this.cribRepository.delete(id);
  }
}
