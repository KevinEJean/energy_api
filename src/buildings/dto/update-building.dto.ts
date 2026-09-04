import { PartialType } from '@nestjs/mapped-types';
import { createBuildingsDto } from './create-building.dto';

export class UpdateBuildingDto extends PartialType(createBuildingsDto) {}