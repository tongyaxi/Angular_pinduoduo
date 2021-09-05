import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface TopMenu {
  title: string,
  link: string,
  id: number
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit,OnChanges {


  // selectedIndex = -1;
  @Input()
  selectedTabLink : any = '';
  @Input()
  menus:TopMenu[]|any = [];
  @Input()
  backgroundColor = '#fff';
  @Input()
  titleActiveColor = 'yellow';
  @Input()
  titleColor = 'blue';
  @Input()
  indicatorColor = 'brown';

  @Output()
  tabselected = new EventEmitter();
  
  constructor() { }

  ngOnChanges(changes:SimpleChanges): void{
    console.log(changes)
  }
  ngOnInit(): void {
  }

  handleSelection(index:number){
    // this.selectedIndex = index;
    this.tabselected.emit(this.menus[index]);
  }

}
