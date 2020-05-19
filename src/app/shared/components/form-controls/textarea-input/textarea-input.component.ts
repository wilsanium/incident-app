import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.css']
})
export class TextareaInputComponent implements OnInit, DoCheck {
    @Input() control: AbstractControl | null = null;
    @Input() label = 'field';
    @Input() guidance = '';
    @Input() id = '1';
    @Input() autoFocus = false;
    @Input() readOnly = false;
    @Input() autoWidth = false;

    isOptional: boolean;

    ngOnInit() {
      this.isOptional = this.checkIsOptional();
    }

    ngDoCheck() {
      this.isOptional = this.checkIsOptional();
    }

    checkIsOptional() {
      if (!!this.control.validator) {
        const validator = this.control.validator({} as AbstractControl);

        if (validator && validator.required) {
          return false;
        }
      }

      return true;
    }
}
