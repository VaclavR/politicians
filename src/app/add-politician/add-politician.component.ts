import { Component, OnInit } from '@angular/core';
import { PoliticService } from '../politics.service';

@Component({
  selector: 'app-add-politician',
  templateUrl: './add-politician.component.html',
  styleUrls: ['./add-politician.component.css']
})
export class AddPoliticianComponent implements OnInit {

  options = [
    { display: 'Unknown', value: 'unknown' },
    { display: 'Left', value: 'left' },
    { display: 'Middle', value: 'middle' },
    { display: 'Right', value: 'right' },
  ];

  defaultValue = 'unknown';

  polService: PoliticService;
  constructor(polService: PoliticService) {
    this.polService = polService;
   }

  ngOnInit() {
  }

  onFormSubmit(form) {
    this.polService.addNewPolitician(form.value.name, form.value.value);
  }

}
