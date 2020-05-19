import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-input-validation',
    templateUrl: './input-validation.component.html',
    styleUrls: ['./input-validation.component.css'],
})
export class InputValidationComponent implements OnChanges {
    @Input() validationErrors: object | null = null;
    @Input() fieldName = 'Field';
    @Input() customMessage: string;

    errorMessage: string | null = null;

    ngOnChanges(): void {
        this.errorMessage = this.getErrorMessage();
    }

    getErrorMessage(): string | null {
        const errors = this.validationErrors;
        const errorKeys = Object.keys(errors);

        if (errors) {
            if (this.customMessage) {
                return this.customMessage;
            }
            switch (errorKeys[0]) {
                case 'required':
                    return `${this.fieldName} is required`;
                case 'email':
                    return 'Must be a valid email address';
                case 'maxlength':
                    return `Must be a maximum of ${errors['maxlength'].requiredLength} character(s)`;
                case 'minlength':
                    return `Must be a minimum of ${errors['minlength'].requiredLength} character(s)`;
                case 'pattern':
                    return 'Must be the correct format';
                case 'numberOnly':
                    return 'Must contain only numbers';
                default:
                    return null;
            }
        }
        return null;
    }
}
