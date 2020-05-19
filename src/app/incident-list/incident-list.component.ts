import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronDown, faChevronUp, faPlus } from '@fortawesome/free-solid-svg-icons';

import { Incident } from '../shared/models/incident';
import { IncidentService } from '../shared/services/incident.service';

@Component({
    selector: 'app-incident-list',
    templateUrl: './incident-list.component.html',
    styleUrls: ['./incident-list.component.css'],
})
export class IncidentListComponent implements OnInit {
    activeIncidents: Incident[];
    displayMap: boolean;
    displayMapText: string;

    chevronDownIcon = faChevronDown;
    chevronUpIcon = faChevronUp;

    actions = [
        {
            label: 'New incident',
            labelIcon: faPlus,
            command: () => {
                this.createNnewIncident();
            },
        },
    ];

    constructor(
        private router: Router,
        private incidentService: IncidentService
    ) {}

    ngOnInit(): void {
        this.incidentService
            .getActiveIncidents()
            .subscribe((incidents: Incident[]) => {
                this.activeIncidents = incidents;
            });

        this.setDisplayMapText(this.displayMap);
    }

    createNnewIncident() {
        this.router.navigate(['/report-incident']);
    }

    toggleMap() {
        this.displayMap = !this.displayMap;
        this.setDisplayMapText(this.displayMap);
    }

    setDisplayMapText(displayMapValue) {
        this.displayMapText = displayMapValue ? 'Hide' : 'View';
    }
}
