import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollableTabComponent,ImageSliderComponent,HorizontalGridComponent, CountDownComponent, FooterComponent, VerticalGridComponent, ProductCardComponent, ProductTileComponent, BackButtonComponent, ProductVariantDialogComponent, ProductAmountComponent } from './components';
import { AvatarDirective, GridItemDirctive, GridItemImageDirctive, GridItemTitleDirctive, TagDirective } from './directives';
import { AgoPipe } from './pipes';
import { DialogModule } from '../dialog';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirctive,
    GridItemImageDirctive,
    GridItemTitleDirctive,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent,
    ProductVariantDialogComponent,
    ProductAmountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent,
    GridItemDirctive,
    GridItemImageDirctive,
    GridItemTitleDirctive,
    AgoPipe,
    CountDownComponent,
    FooterComponent,
    VerticalGridComponent,
    ProductCardComponent,
    TagDirective,
    AvatarDirective,
    ProductTileComponent,
    BackButtonComponent,
    ProductAmountComponent
  ],
  entryComponents: [ProductVariantDialogComponent]
})
export class SharedModule { }
