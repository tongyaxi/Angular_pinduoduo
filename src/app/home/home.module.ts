import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeGrandComponent, HomeContainerComponent, HomeDetailComponent, ParentComponent, ChildComponent } from './components';

import { HomeRoutingModule } from './home-routing.module';
import { HomeService, token } from './servies';


@NgModule({
  declarations: [
    HomeContainerComponent,
    HomeDetailComponent,
    HomeGrandComponent,
    ParentComponent,
    ChildComponent
  ],
  providers: [
    // HomeService,
    {provide:token, useValue:'http://local.dev'}
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
