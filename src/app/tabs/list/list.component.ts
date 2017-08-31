import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PoliticService } from '../../politics.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit, OnDestroy {

  politics = [];
  activatedRoute: ActivatedRoute;
  polService: PoliticService;
  subscription;
  loadedList = 'all';

  constructor(polService: PoliticService, activatedRoute: ActivatedRoute)  {
    this.activatedRoute = activatedRoute;
    this.polService = polService;
   }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params) => {
        this.politics = this.polService.showList(params.orientation);
        this.loadedList = params.orientation;
      });

    this.subscription = this.polService.signal.subscribe(
      () => {
        this.politics = this.polService.showList(this.loadedList);
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
