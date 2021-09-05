import { Directive, ElementRef, HostBinding, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appGridItemTitle]',
})

export class GridItemTitleDirctive{
  // @Input() appGridItemTitle = '0.5rem';
  
  @HostBinding('style.grid-area') title = 'title';
  @HostBinding('style.font-size') @Input() appGridItemTitle = '0.5rem'
  // constructor(private elr : ElementRef, private rd2 : Renderer2) {
    
  // }
  // ngOnInit() {
  //   this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'title');
  //   this.rd2.setStyle(this.elr.nativeElement, 'font-size', this.appGridItemTitle);
  // }
}