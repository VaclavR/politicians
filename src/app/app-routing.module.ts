import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';

const routes = [
  { path: '', component: HeaderComponent, children: [
    { path: 'tabs', loadChildren: './tabs/tabs.module.ts#TabsModule' },
    { path: 'form', loadChildren: './add-politician/add-politician.module.ts#AddPoliticianModule'}
  ] },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
