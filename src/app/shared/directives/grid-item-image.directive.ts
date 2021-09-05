import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appGridItemImage]',
})

export class GridItemImageDirctive{
  @Input() public appGridItemImage : any = '2rem';
  @Input() public fitModle : any = 'cover';

  constructor(private elr : ElementRef, private rd2 : Renderer2) {
    
  }
  ngOnInit() {
    this.rd2.setStyle(this.elr.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.elr.nativeElement, 'width', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'height', this.appGridItemImage);
    this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitModle);
  }

  /**
   * 监听事件
   */
  @HostListener('click',['$event.target'])
  handleClick(ev:any) {
    console.log(ev);
  }
}