import { formatDate } from '@angular/common';
import { Component, ElementRef, NgZone, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  _title;

  _time : any;

  @ViewChild('timeRef', { static: true })
  timeRef!: ElementRef;

  constructor(private ngZone: NgZone, private render: Renderer2) { 
    this._title = 'hello';
  }

  ngOnInit() {
  }

  /**脏值检测用 */
  public get title() : string {
    console.log('脏值检测1')
    return this._title;
  }

  public get time() : number{
    console.log('脏值检测2')
    return this._time; // 脏值检测每次检测时，每次的值都不一样，所以抛异常。
  }

  ngAfterViewChecked() {

    /**避免触发脏值检测机制ngZone，这种持续性的变化在angula之外完成 */
    this.ngZone.runOutsideAngular(() => {
      setInterval(()=>{
        this._title = 'hi';
      },100);
    });

    this.ngZone.runOutsideAngular(() => {
      setInterval(()=>{
        this._time = Date.now();
      },100);

      /**用直接写 DOM 的形式可以解决脏值检测无限循环的带来的性能问题 */
      this.ngZone.runOutsideAngular(() => {
        setInterval(()=>{
          // this.timeRef.nativeElement.innerText = Date.now();
          // angular推荐形式,Renderer2来操作dom
          this.render.setProperty(this.timeRef.nativeElement, 'innerText', Date.now());
        },100);
      });
    });
  }

  // click事件触发脏值检测
  handleClick():void {}

}
