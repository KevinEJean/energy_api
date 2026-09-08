import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { createBuildingsDto } from './dto/create-building.dto';
import { BuildingResponseDto } from './dto/response-building.dto';
import { ProblemDetailsDto } from 'src/problems-dto/problem-details.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Buildings')
@Controller({ path: 'buildings', version: '1' })
export class BuildingsController {

    constructor(
        private readonly buildingsService: BuildingsService,
    ) { }

    @ApiCreatedResponse({
        description: 'Bâtiment créé.',
        type: BuildingResponseDto,
        headers: {
            Location: {
                description: 'URI de la nouvelle ressource',
                schema: { type: 'string' },
            },
        },
    })
    @Get()
    findAll() {
        return this.buildingsService.findAll();
    }

    @ApiParam({
        name: 'id',
        description: 'Identifiant UUID du bâtiment',
        format: 'uuid',
    })
    @ApiOperation({
        summary: 'Trouver un bâtiment',
        description: "Trouve un bâtiment dans la collection courante.",
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Get()
    findOne(@Param('id') id: string) {
        return this.buildingsService.findOne(id);
    }

    @ApiOperation({
        summary: 'Créer un bâtiment',
        description: "Ajoute un bâtiment à la collection courante.",
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Post()
    create(@Body() dto: createBuildingsDto) {
        return this.buildingsService.create(dto);
    }
}
