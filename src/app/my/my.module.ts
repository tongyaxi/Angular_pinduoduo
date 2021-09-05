import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MyContainerComponent } from './components';

import { MyRoutingModule } from './my-routing.module';


@NgModule({
  declarations: [
    MyContainerComponent
  ],
  imports: [
    MyRoutingModule,
    SharedModule
  ]
})
export class MyModule { }
