import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomsDto } from './dto/create-rooms.dto';
import { UpdateRoomDto } from './dto/update-rooms.dto';
import { RoomsResponseDto } from './dto/response-rooms.dto';
import { ProblemDetailsDto } from 'src/problems-dto/problem-details.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Rooms')
@Controller({ path: 'rooms', version: '1' })
export class RoomsController {

    private readonly RoomsService: RoomsService

    @ApiCreatedResponse({
        description: 'Logement créé.',
        type: RoomsResponseDto,
        headers: {
            Location: {
                description: 'URI de la nouvelle ressource',
                schema: { type: 'string' },
            },
        },
    })
    @Get()
    findAll() {
        return this.RoomsService.findAll();
    }

    @ApiOperation({
        summary: 'Trouver un logement',
        description: "Trouve un bâtiment dans la collection courante.",
    })
    @ApiParam({
        name: 'id',
        description: 'Identifiant UUID du logement',
        format: 'uuid',
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Get()
    findOne(@Param('id') id: string) {
        return this.RoomsService.findOne(id);
    }

    @ApiOperation({
        summary: 'Créer un logement',
        description: "Ajoute un logement à la collection courante d'un batiemnt.",
    })
    @ApiParam({
        name: 'id',
        description: 'Identifiant UUID du logement',
        format: 'uuid',
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Post(':id')
    create(@Body() dto: CreateRoomsDto) {
        return this.RoomsService.create(dto);
    }

    @ApiOperation({
        summary: 'Modifier un logement',
    })
    @ApiParam({
        name: 'id',
        description: 'Identifiant UUID du logement',
        format: 'uuid',
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Patch(':id')
    update(@Param('id') id: string, @Body('updatedRoom') dto: UpdateRoomDto) {
        return this.RoomsService.update(id, dto);
    }

    @ApiOperation({
        summary: 'Supprimer un logement',
    })
    @ApiParam({
        name: 'id',
        description: 'Identifiant UUID du logement',
        format: 'uuid',
    })
    @ApiBadRequestResponse({
        description: 'Données invalides.',
        type: ProblemDetailsDto,
    })
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param('id') id: string) {
        return this.RoomsService.remove(id);
    }
}
