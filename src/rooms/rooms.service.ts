import { Injectable } from '@nestjs/common';
import { buildMessage } from 'class-validator';
import { CreateRoomsDto } from './dto/create-room.dto';
@Injectable()
export class RoomsService {
    private readonly rooms = [
        { id: '1', category: 'École', capacity: '32', createdAt: new Date() }
    ];

    findAll() {
        return this.rooms;
    }

    findOne(id: string) {
        return this.rooms.find((room) => room.id === id);
    }

    create(dto: CreateRoomsDto) {
        const room = {
            id: String(this.rooms.length + 1),
            ...dto,
        };

        this.rooms.push(room);
        return room;
    }

    update(id: string, oldValue: string, newValue: string) {
        const room = this.findOne(id);

        if (oldValue === 'category') room?.category == newValue;
        else if (oldValue === 'capacity') room?.capacity == newValue;
        else if (oldValue === 'createdAt') room?.createdAt == new Date(newValue);

        return room;
    }
}
