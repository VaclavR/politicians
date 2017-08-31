import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddPoliticianComponent } from './add-politician.component';

@NgModule({
  declarations: [
    AddPoliticianComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AddPoliticianComponent }
    ])
  ]
})

export class AddPoliticianModule { }
