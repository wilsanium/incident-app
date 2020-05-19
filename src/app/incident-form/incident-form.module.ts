import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { IncidentFormRoutingModule } from './incident-form-routing.module';
import { IncidentFormComponent } from './incident-form.component';

@NgModule({
    declarations: [IncidentFormComponent],
    imports: [
        CommonModule,
        IncidentFormRoutingModule,
        SharedModule,
        ReactiveFormsModule,
    ],
})
export class IncidentFormModule {}
