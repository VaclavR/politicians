import { Component, OnInit, Input } from '@angular/core';
import { PoliticService } from '../../../politics.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() politic;
  polService: PoliticService;

  constructor(polService: PoliticService) {
    this.polService = polService;
   }

  ngOnInit() {
  }

  chooseOrientation(orientation) {
    this.polService.changeOrientation({name: this.politic.name, orientation: orientation });
  }

}
