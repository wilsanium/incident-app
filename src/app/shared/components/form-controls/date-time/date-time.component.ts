import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-date-time',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.css'],
})
export class DateTimeComponent implements OnInit {
    @Input() control: AbstractControl | null = null;
    @Input() label = 'field';
    @Input() guidance = '';
    @Input() id = '1';
    @Input() autoWidth = false;

    dateTimeFieldGroup: FormGroup;

    dateTime: Date;

    maxDaysInSelectedMonth: number;
    currentYear: number;
    previousYear: number;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.dateTime = this.control.value;

        this.dateTimeFieldGroup = this.instantiateDateTimeFieldGroup();

        this.maxDaysInSelectedMonth = this.getMaxDaysInMonth(
            this.dateTime.getFullYear(),
            this.dateTime.getMonth()
        );

        this.currentYear = this.dateTime.getFullYear();
        this.previousYear = this.currentYear - 1;

        this.handleFormChanges();
    }

    instantiateDateTimeFieldGroup() {
        return this.fb.group({
            date: this.fb.group({
                day: [this.dateTime.getDate(), Validators.required],
                month: [this.dateTime.getMonth(), Validators.required],
                year: [this.dateTime.getFullYear(), Validators.required],
            }),
            time: this.fb.group({
                hour: [this.dateTime.getHours(), Validators.required],
                minute: [this.dateTime.getMinutes(), Validators.required],
            }),
        });
    }

    getMaxDaysInMonth(year: number, month: number) {
        return new Date(year, month, 0).getDate();
    }

    handleFormChanges() {
        this.dateTimeFieldGroup
            .get('date.month')
            .valueChanges.subscribe((monthValue) => {
                this.setMaxDaysInMonth(monthValue);

                this.ensureDayValueInRange(this.maxDaysInSelectedMonth);
            });

        this.dateTimeFieldGroup
            .get('date.year')
            .valueChanges.subscribe((monthValue) => {
                this.setMaxDaysInMonth(monthValue);

                this.ensureDayValueInRange(this.maxDaysInSelectedMonth);
            });
    }

    setMaxDaysInMonth(monthValue) {
        this.maxDaysInSelectedMonth = this.getMaxDaysInMonth(
            this.dateTimeFieldGroup.get('date.year').value,
            monthValue
        );
    }

    ensureDayValueInRange(maxDaysInSelectedMonth) {
        if (
            this.dateTimeFieldGroup.get('date.day').value >
            maxDaysInSelectedMonth
        ) {
            this.dateTimeFieldGroup
                .get('date.day')
                .setValue(maxDaysInSelectedMonth);
        }
    }
}
