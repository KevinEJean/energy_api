import { randomUUID } from "crypto";
import { CreateRoomsDto } from "../dto/create-rooms.dto";

export class Rooms {
    id: string;
    code: string;
    buildingId: string;
    floor: number;
    type?: string;
    capacity?: number;
    createdAt: Date;
    updatedAt: Date;

    constructor({code, buildingId, floor, type, capacity} : CreateRoomsDto) {
        this.id = randomUUID();
        this.code = code;
        this.buildingId = buildingId;
        this.floor = floor;
        type ?? this.type;
        capacity ?? this.capacity;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
