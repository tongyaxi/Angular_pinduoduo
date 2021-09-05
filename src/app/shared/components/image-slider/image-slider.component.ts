import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren, QueryList, Renderer2, ChangeDetectionStrategy } from '@angular/core';

export interface ImageSlider {
  id: number,
  imgUrl: string;
  link: string;
  caption: string;
}
@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  /**@Input属性改变时，才会触发脏值检测。而且只会检测该分支的树 */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageSliderComponent implements OnInit {

  @Input()
  public sliders: ImageSlider[]|any = [];

  @Input()
  public slideHeight : any = '160px';

  @Input()
  public intervalBySecond : any = 2;

  @ViewChild('imageSlider', { static: true })
  public imgSlider : any; 

  @ViewChildren('images')
  imgs!: QueryList<ElementRef>;

  public selectedIndex : any = 0;
  public intervalId : any;


  constructor(private rd2: Renderer2) { }

  ngOnInit() {
    console.log(':',this.sliders)
    // console.log(this.imgSlider)
    // this.imgSlider.nativeElement.innerHTML = '<span>hello</span>'
  }

  ngAfterViewInit() {
    // console.log(this.imgs)
    // this.imgs.forEach(item => item.nativeElement.style.height = '100px');

    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement,'height','100px')
    // });
    /**商品详情页面，不需要轮播 */
    if(this.intervalBySecond <= 0) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft',
      (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySecond * 1000);
  }

  getIndex(idx: number): number {
    return idx >= 0
      ? idx % this.sliders.length
      : this.sliders.length - (Math.abs(idx) % this.sliders.length);
  }

  handleScroll(ev:any) {
    const ratio =
      ev.target.scrollLeft / (ev.target.scrollWidth / this.sliders.length);
    this.selectedIndex = Math.round(ratio);
  }

  /**
   * 防止内存泄露
   */
  ngOnDestroyed(){
    clearInterval(this.intervalId);
  }

}
