import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Incident } from '../shared/models/incident';
import { IncidentService } from '../shared/services/incident.service';

@Component({
    selector: 'app-incident-form',
    templateUrl: './incident-form.component.html',
    styleUrls: ['./incident-form.component.css'],
})
export class IncidentFormComponent implements OnInit {
    incidentForm: FormGroup;
    currentDateTime: Date;

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private incidentService: IncidentService
    ) {}

    ngOnInit(): void {
        this.currentDateTime = this.getCurrentDateTime();
        this.incidentForm = this.instantiateIncidentForm();
    }

    instantiateIncidentForm() {
        return this.fb.group({
            status: ['new', Validators.required],
            summary: ['', Validators.required],
            additionalDetail: [''],
            dateTime: [this.currentDateTime, Validators.required],
            location: [''],
        });
    }

    getCurrentDateTime() {
        return new Date();
    }

    cancelIncident() {
        this.router.navigate(['/']);
    }

    submitIncident() {
        if (this.incidentForm.valid) {
            const incidentData = this.incidentDTO();
            this.incidentService.createIncident(incidentData);
            this.router.navigate(['/']);
        }
    }

    incidentDTO(): Incident {
        return {
            id: 3,
            priority: 'p1',
            summary: this.incidentForm.get('summary').value,
            additionalDescription: this.incidentForm.get('additionalDetail')
                .value,
            createDate: this.currentDateTime,
            location: { lat: 53.754551, lng: -0.33584 },
            linkedIncidentIds: [],
        };
    }
}
