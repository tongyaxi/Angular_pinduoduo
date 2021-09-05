import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { ChatContainerComponent } from './components';


@NgModule({
  declarations: [
    ChatContainerComponent
  ],
  imports: [
    ChatRoutingModule
  ]
})
export class ChatModule { }
