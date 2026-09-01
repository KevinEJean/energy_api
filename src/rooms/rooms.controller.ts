import { Controller, Get, Post, Put } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { CreateRoomsDto } from './dto/create-room.dto';

@Controller('rooms')
export class RoomsController {

    private readonly RoomsService : RoomsService

    @Get()
    findAll() {
        return this.RoomsService.findAll();
    }

    @Get()
    findOne(id: string) {
        return this.RoomsService.findOne(id);
    }

    @Post()
    create(dto: CreateRoomsDto) {
        return this.RoomsService.create(dto);
    }

    @Put()
    update(id: string, oldValue:string, newValue: string) {
        return this.RoomsService.update(id, oldValue, newValue);
    }
}
