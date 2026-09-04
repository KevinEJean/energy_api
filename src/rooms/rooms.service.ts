import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomsDto } from './dto/create-rooms.dto';
import { UpdateRoomDto } from './dto/update-rooms.dto';
import { Rooms } from './entities/rooms.entity';

@Injectable()
export class RoomsService {
    private readonly rooms: Rooms[] = [];

    create(createRoomDto: CreateRoomsDto) {
      const newRoom: Rooms = new Rooms(createRoomDto);
      
      this.rooms.push(newRoom);
  
      return newRoom;
    }
  
    findAll() {
      return this.rooms;
    }
  
    findOne(id: string) {
      const room: Rooms | undefined = this.rooms.find((room: Rooms) => room.id === id);
      
      if(!room){
        throw new NotFoundException(`Le local avec l'ID "${id}" n'existe pas.`);
      }
  
      return room;
    }
  
    update(id: string, updateRoomDto: UpdateRoomDto) {
      const room: Rooms = this.findOne(id);
          
      Object.assign(room, updateRoomDto);
      room.updatedAt = new Date();
  
      return room;
    }
  
    remove(id: string): void {
      const index: number =  this.rooms.findIndex((room: Rooms) => room.id === id);
      if(index === -1){
        throw new NotFoundException(`Le local avec l'ID "${id}" n'existe pas.`);
      }
  
      this.rooms.splice(index, 1);
    }
}
