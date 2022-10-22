import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { CribsService } from './cribs.service';
import { CreateCribDto } from './dto/create-crib.dto';
import { UpdateCribDto } from './dto/update-crib.dto';
import { Crib } from './entities/crib.entity';

@Controller('cribs')
export class CribsController {
  constructor(private readonly cribsService: CribsService) {}

  @Post()
  create(@Body() createCribDto: CreateCribDto): Promise<Crib> {
    return this.cribsService.create(createCribDto);
  }

  @Get()
  findAll(): Promise<Crib[]> {
    return this.cribsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Crib> {
    return this.cribsService.findOne(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCribDto: UpdateCribDto,
  ): Promise<Crib> {
    return await this.cribsService.update(+id, updateCribDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.cribsService.remove(+id);
  }
}
