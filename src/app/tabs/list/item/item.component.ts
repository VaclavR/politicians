import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() politic;
  @Output() modifiedPolitician = new EventEmitter<{name: string, orientation: string}>();

  constructor() { }

  ngOnInit() {
  }

  chooseOrientation(orientation) {
    this.modifiedPolitician.emit({name: this.politic.name, orientation: orientation});
  }

}
