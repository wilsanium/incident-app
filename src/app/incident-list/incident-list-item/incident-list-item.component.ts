import { Component, OnInit, Input } from '@angular/core';
import { Incident } from 'src/app/shared/models/incident';

@Component({
    selector: 'app-incident-list-item',
    templateUrl: './incident-list-item.component.html',
    styleUrls: ['./incident-list-item.component.css'],
})
export class IncidentListItemComponent implements OnInit {
    @Input() incident: Incident;

    constructor() {}

    ngOnInit(): void {}
}
