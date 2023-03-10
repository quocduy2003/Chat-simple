import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatModels } from 'src/app/models/chat.model';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.scss']
})
export class MessengerComponent {

  chat$!: Observable<any>;
  messages: any[] = [];
  roomId: string = '';
  newMessage: string = '';
  userName: string = '';

  constructor(private chatService: ChatService) { }
  joinRoom(roomId: string) {
    if (roomId || this.userName) {
      console.log('Already joined in: ', roomId);
      this.chat$ = this.chatService.getMessagesByRoomID(roomId);
      this.chat$.subscribe((message: any) => { this.messages.push(message) });
    }
    else {
      window.alert('Please fill in the room id and your name')
    }
  }
  sendMessage(message: string) {
    let newMessageData: ChatModels = {
      roomId: this.roomId,
      msg: message,
      date: Date.now(),
      from: this.userName
    }
    this.chatService.sendMessageByRoom(newMessageData);
  }
}
