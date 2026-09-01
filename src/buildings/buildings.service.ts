import { Injectable } from '@nestjs/common';
import { createBuildingsDto } from './dto/create-building.dto';

@Injectable()
export class BuildingsService {
    private readonly buildings = [
        { id: '1', name: 'Pavillon principal' },
    ];

    findAll() {
        return this.buildings;
    }

    findOne(id: string) {
        return this.buildings.find((building) => building.id === id);
    }

    create(dto: createBuildingsDto) {
        const building = {
            id: String(this.buildings.length + 1),
            ...dto,
        };

        this.buildings.push(building);
        return building;
    }
}
