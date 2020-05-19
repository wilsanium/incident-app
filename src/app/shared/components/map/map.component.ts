import {
    AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { GoogleMap, MapInfoWindow } from '@angular/google-maps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit, AfterViewInit {
    @Input() zoom = 11;
    @Input() searchEnabled = true;

    // tslint:disable-next-line: variable-name
    _center: google.maps.LatLngLiteral;
    get center(): google.maps.LatLngLiteral {
        return this._center;
    }
    @Input('center')
    set center(value: google.maps.LatLngLiteral) {
        this._center = value;
    }

    @Output() searchClickEvent = new EventEmitter<any>();

    searchEnabledFlag = false;
    markers = [];

    searchInputEl: HTMLInputElement;

    @ViewChild('searchInput', { static: false }) searchElementRef: ElementRef;
    @ViewChild('map', { static: false }) map: GoogleMap;

    constructor() {}

    ngOnInit(): void {
        if (this.searchEnabled) {
            this.searchEnabledFlag = true;
        }
    }

    ngAfterViewInit() {
        if (this.searchEnabled) {
            this.instantiateSearch();
        }
    }

    instantiateSearch() {
        const searchBox = new google.maps.places.SearchBox(
            this.searchElementRef.nativeElement
        );

        searchBox.addListener('places_changed', () => {
            const places = searchBox.getPlaces();

            if (places.length === 0) {
                return;
            }

            // Clear out the old markers.
            this.markers.forEach((marker) => {
                marker.setMap(null);
            });
            this.markers = [];

            // For each place, get the icon, name and location.
            const bounds = new google.maps.LatLngBounds();
            places.forEach((place) => {
                if (!place.geometry) {
                    console.log('Returned place contains no geometry');
                    return;
                }
                const icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25),
                    draggable: true,
                };

                // Create a marker for each place.
                this.markers.push(
                    new google.maps.Marker({
                        icon,
                        title: place.name,
                        position: place.geometry.location,
                        draggable: true,
                    })
                );

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });

            const firstResultLocation = places[0].geometry.location;
            this.center = {
                lat: firstResultLocation.lat(),
                lng: firstResultLocation.lng(),
            };
            this.zoom = 15;

            this.searchClickEvent.emit(this.center);
        });
    }
}
