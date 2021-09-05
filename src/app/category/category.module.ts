import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryContainerComponent } from './components';


@NgModule({
  declarations: [
    CategoryContainerComponent
  ],
  imports: [
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
