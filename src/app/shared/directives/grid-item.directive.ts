import { Directive, ElementRef, HostBinding, Renderer2 } from "@angular/core";

/**
 * 指令可以理解为没有模板的组件，它需要一个宿主元素。
 * 推荐使用方括号[]指定selector，使他变成一个属性。
 */
@Directive({
  selector: '[appGridItem]',
})

export class GridItemDirctive{

  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-areas') template = `'image' 'title'`;
  @HostBinding('style.place-items') align = 'center';
  @HostBinding('style.width') width = '4rem';
  // constructor(private elr : ElementRef, private rd2 : Renderer2) {
    
  // }

  // ngOnInit() {
  //   this.rd2.setStyle(this.elr.nativeElement, 'display', 'grid');
  //   this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'image' 'title'`);
  //   this.rd2.setStyle(this.elr.nativeElement, 'place-items', 'center');
  //   this.rd2.setStyle(this.elr.nativeElement, 'width', '4rem');
  // }
}