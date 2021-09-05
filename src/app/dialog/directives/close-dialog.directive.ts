import { Directive } from '@angular/core';
import { DialogService } from '../services';

@Directive({
  selector: '[appCloseDialog]'
})
export class CloseDialogDirective {
  constructor(private dialogService: DialogService) {}
}
