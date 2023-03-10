import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessengerRoutingModule } from './messenger-routing.module';
import { MessengerComponent } from './messenger.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessengerComponent
  ],
  imports: [
    CommonModule,
    MessengerRoutingModule,
    FormsModule
  ]
})
export class MessengerModule { }
