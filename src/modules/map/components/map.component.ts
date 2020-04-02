import { Component, ViewChild, OnInit, ElementRef, AfterViewInit } from '@angular/core';

declare let H: any;

@Component ({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

    private platform: any;

    @ViewChild('map', {static: false}) public mapElement: ElementRef;

    constructor() {
        this.platform = new H.service.platform({
            'app-id': 'kuIOrGxQzZI8vqG9ZRhL',
            'app-code': 'xO6Ux8Gxxy9jNotNSlV8SI7g9mLfoR7TOZjOavh2rvc',
            useHTTPS: true
        });
    }

    public ngOnInit() { }

    public ngAfterViewInit() {

        setTimeout(() => {
            const defaultLayers = this.platform.createDefaultLayers();
            const map = new H.map(
                    this.mapElement.nativeElement,
                        defaultLayers.normal.map,
                    {
                        zoom: 10,
                        center: { lat: 44.01667, lng: 20.91667 }
                    }
                );
        }, 1000);
    }
}

