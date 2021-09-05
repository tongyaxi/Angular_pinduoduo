import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './components';
import { CloseDialogDirective } from './directives';
import { ProductModule } from '../product';

export * from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, CloseDialogDirective],
  exports: [DialogComponent]
})
export class DialogModule {}
