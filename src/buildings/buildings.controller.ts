import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { createBuildingsDto } from './dto/create-building.dto';

@Controller('buildings')
export class BuildingsController {

    constructor(
        private readonly buildingsService: BuildingsService,
    ) { }

    @Get()
    findAll() {
        return this.buildingsService.findAll();
    }

    @Get()
    findOne(@Param('id') id: string) {
        return this.buildingsService.findOne(id);
    }

    @Post()
    create(@Body() dto: createBuildingsDto) {
        return this.buildingsService.create(dto);
    }
}
