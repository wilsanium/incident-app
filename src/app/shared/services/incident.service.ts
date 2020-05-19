import { of } from 'rxjs';

import { Injectable } from '@angular/core';

import { Incident } from '../models/incident';

@Injectable({
    providedIn: 'root',
})
export class IncidentService {
    incidents: Incident[] = [
        {
            id: 1,
            priority: 'p1',
            summary: 'Incident 1',
            additionalDescription: null,
            createDate: new Date(),
            location: {
                lat: 53.744339,
                lng: -0.33244,
            },
            linkedIncidentIds: null,
        },
        {
            id: 2,
            priority: 'p2',
            summary: 'Incident 2',
            additionalDescription: null,
            createDate: new Date(),
            location: {
                lat: 53.75771,
                lng: -0.365595,
            },
            linkedIncidentIds: null,
        },
    ];

    constructor() {}

    getActiveIncidents() {
        return of(this.incidents);
    }

    createIncident(incident: Incident) {
        this.incidents.push(incident);
    }
}
