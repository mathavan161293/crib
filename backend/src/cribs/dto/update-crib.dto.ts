import { PartialType } from '@nestjs/mapped-types';
import { CreateCribDto } from './create-crib.dto';

export class UpdateCribDto extends PartialType(CreateCribDto) {}
