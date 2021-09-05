import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ConfirmOrderComponent, GroupItemComponent, GroupShortListComponent, PaymentComponent, ProductContainerComponent } from './components';

import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [
    ProductContainerComponent,
    GroupItemComponent,
    GroupShortListComponent,
    ConfirmOrderComponent,
    PaymentComponent
  ],
  imports: [
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductModule { }
