import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { LogService } from './log.service';

@Injectable()

export class PoliticService  {

  private politics = [
    {name: 'Sobotka', orientation: ''},
    {name: 'Zeman', orientation: ''},
    {name: 'Kalousek', orientation: ''},
    {name: 'Bělobrádek', orientation: ''},
    {name: 'Okamura', orientation: ''},
    {name: 'Robejšek', orientation: ''},
    {name: 'Zaorálek', orientation: ''},
    {name: 'Babiš', orientation: ''},
  ];

  private logService: LogService;
  signal = new Subject<void>();

  constructor(logService: LogService) {
    this.logService = logService;
  }

  showList(chosenList) {
    if (chosenList === 'all') {
      return this.politics.slice();
    }
    return this.politics.filter((politician) => {
      return chosenList === politician.orientation;
    });
  }

  changeOrientation(passedPolitician) {
    const position = this.politics.findIndex((politician) => {
      return passedPolitician.name === politician.name;
    });
    this.logService.createChangeLog({name: passedPolitician.name, orientation: passedPolitician.orientation});
    this.politics[position].orientation = passedPolitician.orientation;
    this.signal.next();
  }

  addNewPolitician(name, orientation) {
    const position = this.politics.findIndex((politician) => {
      return politician.name === name;
    });
    if (position !== -1) {
      return;
    }
    const newPolitician = {name: name, orientation: orientation};
    this.logService.createInputLog(newPolitician);
    this.politics.push(newPolitician);
  }

}
