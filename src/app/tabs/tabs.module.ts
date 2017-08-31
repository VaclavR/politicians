import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TabsComponent } from './tabs.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './list/item/item.component';

@NgModule({
  declarations: [
    TabsComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: TabsComponent, children: [
        { path: '', redirectTo: 'all', pathMatch: 'full' },
        { path: ':orientation', component: ListComponent}
      ]}
    ])
  ]
})

export class TabsModule { }
