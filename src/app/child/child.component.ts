import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() count;
  @Output() increment = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  click(){
    this.increment.emit();
  }



}
