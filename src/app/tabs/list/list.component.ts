import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() politics;
  @Output() modifiedPolitician = new EventEmitter<{name: string, orentation: string}>();

  constructor() { }

  ngOnInit() {
  }

  choosenOrientation(orientation) {
    this.modifiedPolitician.emit(orientation);
  }

}
