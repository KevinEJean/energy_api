import { randomUUID } from "crypto";
import { CreateRoomsDto } from "../dto/create-room.dto";

export class Rooms {
    id:number;
    category:string;
    capacity:string;
    createdAt:Date;

    constructor(createRoomsDto : CreateRoomsDto) {
        // this.id = randomUUID();
        this.category =  createRoomsDto.category;
        this.createdAt = createRoomsDto.createdAt;
    }
}
