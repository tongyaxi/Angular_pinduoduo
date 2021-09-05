import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

export interface ImageTitle {
  id:number;
  icon:string;
  title:string;
  link:string;
}

@Component({
  selector: 'app-horizontal-grid',
  templateUrl: './horizontal-grid.component.html',
  styleUrls: ['./horizontal-grid.component.css']
})
export class HorizontalGridComponent implements OnInit {

  @Input()
  cols = 8;
  @Input()
  dispalyCols = 5;

  sliderMargin = '0';

  public get templateRows() : string {
    return `minmax(auto, max-content)`;
  }

  public get templateCols() : string {
    return `repeat(${this.cols}, calc((100vw - ${this.dispalyCols * 0.4}rem) / ${this.dispalyCols}))`;
  }

  public scrollable() : boolean {
    return this.cols > this.dispalyCols;
  }
  /**处理滚动 */
  handleScroll(ev:any) {
    this.sliderMargin = `0 ${100 * ev.target.scrollLeft / ev.target.scrollWidth}%`;
  }

  private _username : string = '';

  @Output()
  usernameChange = new EventEmitter();

  @Emoji() result:any = 'Hello';
  constructor() { }

  ngOnInit() {
  }

  @Input()
  public get username() : string {
    return this._username;
  }

  public set username(v : string) {
    this._username = v;
    this.usernameChange.emit(v);
  }
  
  @Confirmable('确认要执行？')
  handleClick(){
    console.log('函数回执。');
  }

}
