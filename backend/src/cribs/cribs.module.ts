import { Module } from '@nestjs/common';
import { CribsService } from './cribs.service';
import { CribsController } from './cribs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crib } from './entities/crib.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crib])],
  controllers: [CribsController],
  providers: [CribsService],
  exports: [TypeOrmModule],
})
export class CribsModule {}
