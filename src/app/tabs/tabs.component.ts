import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  politics = [
    {name: 'Sobotka', orientation: ''},
    {name: 'Zeman', orientation: ''},
    {name: 'Kalousek', orientation: ''},
    {name: 'Bělobrádek', orientation: ''},
    {name: 'Okamura', orientation: ''},
    {name: 'Robejšek', orientation: ''},
    {name: 'Zaorálek', orientation: ''},
    {name: 'Babiš', orientation: ''},
  ];
  chosenList = 'all';

  constructor() { }

  ngOnInit() {
  }

  setFilter(orientation) {
    this.chosenList = orientation;
  }

  showList() {
    if (this.chosenList === 'all') {
      return this.politics.slice();
    }
    return this.politics.filter((politician) => {
      return this.chosenList === politician.orientation;
    });
  }

  changeOrientation(passedPolitician) {
    const position = this.politics.findIndex((politician) => {
      return passedPolitician.name === politician.name;
    });
    this.politics[position].orientation = passedPolitician.orientation;
  }

}
