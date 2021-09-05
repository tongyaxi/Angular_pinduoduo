import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecommendContainerComponent } from './components/recommend-container/recommend-container.component';

import { RecommendRoutingModule } from './recommend-routing.module';


@NgModule({
  declarations: [
    RecommendContainerComponent
  ],
  imports: [
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }
