import { Injectable, NotFoundException } from '@nestjs/common';
import { createBuildingsDto } from './dto/create-building.dto';
import { Building } from './entities/building.entity';
import { UpdateBuildingDto } from './dto/update-building.dto';

@Injectable()
export class BuildingsService {
    private readonly buildings: Building[] = [];

    findAll(): Building[] {
        return this.buildings;
    }

    findOne(id: string): Building {
        const building: Building | undefined = this.buildings.find((building: Building) => building.id === id);

        if (!building) {
            throw new NotFoundException(`Le bâtiment avec l'ID "${id}" n'existe pas.`);
        }

        return building;
    }

    create(dto: createBuildingsDto) {
        const { code, name, yearBuilt, address } = dto;
        const newBuilding: Building = new Building(code, name, yearBuilt, address);

        Object.assign(newBuilding, createBuildingsDto);

        this.buildings.push(newBuilding);

        return newBuilding;
    }

    update(id: string, updateBuildingDto: UpdateBuildingDto): Building {
        const building: Building = this.findOne(id);

        Object.assign(building, updateBuildingDto);
        building.updatedAt = new Date();

        return building;
    }
}
