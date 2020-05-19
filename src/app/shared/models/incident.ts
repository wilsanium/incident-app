export interface Incident {
    id: number;
    priority: string;
    summary: string;
    additionalDescription: string;
    createDate: Date;
    location: google.maps.LatLngLiteral;
    linkedIncidentIds: string[];
}
