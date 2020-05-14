import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './components/button/button.component';
import { TextInputComponent } from './components/form-controls/text-input/text-input.component';
import { FormComponent } from './components/form/form.component';
import { InputValidationComponent } from './components/form-controls/input-validation/input-validation.component';

@NgModule({
  declarations: [ButtonComponent, FormComponent, TextInputComponent, InputValidationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ButtonComponent, FormComponent, TextInputComponent, InputValidationComponent],
})
export class SharedModule {}
