import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentListComponent } from './incident-list.component';
import { IncidentListItemComponent } from './incident-list-item/incident-list-item.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [IncidentListComponent, IncidentListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [IncidentListComponent]
})
export class IncidentListModule { }
