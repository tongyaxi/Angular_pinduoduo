import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  @ViewChild('inputRef',{static:true})
  inputRef! : ElementRef;

  startDate = new Date(2021,6,1);
  futureDate = new Date(2021,6,2)

  constructor() { }

  ngOnInit() {
    fromEvent(this.inputRef.nativeElement, 'input').subscribe((ev:any) => {
      console.log(ev.target.value)
    });
  }

}
