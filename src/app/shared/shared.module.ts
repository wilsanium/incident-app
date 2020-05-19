import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ButtonComponent } from './components/button/button.component';
import { DateTimeComponent } from './components/form-controls/date-time/date-time.component';
import {
    InputValidationComponent
} from './components/form-controls/input-validation/input-validation.component';
import { TextInputComponent } from './components/form-controls/text-input/text-input.component';
import {
    TextareaInputComponent
} from './components/form-controls/textarea-input/textarea-input.component';
import { FormComponent } from './components/form/form.component';
import { MapComponent } from './components/map/map.component';

@NgModule({
    declarations: [
        ButtonComponent,
        FormComponent,
        TextInputComponent,
        InputValidationComponent,
        MapComponent,
        TextareaInputComponent,
        DateTimeComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        GoogleMapsModule,
    ],
    exports: [
        ButtonComponent,
        FormComponent,
        TextInputComponent,
        InputValidationComponent,
        MapComponent,
        TextareaInputComponent,
        DateTimeComponent,
        FontAwesomeModule,
    ],
})
export class SharedModule {}
