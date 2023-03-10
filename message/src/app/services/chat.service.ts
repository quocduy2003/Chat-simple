import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatModels } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket) { }
  getMessagesByRoomID(roomId:string){
    const channel='message-'+roomId;
    return this.socket.fromEvent(channel);
  }
  sendMessageByRoom(data:ChatModels){
    this.socket.emit('message',data);
  }
}
