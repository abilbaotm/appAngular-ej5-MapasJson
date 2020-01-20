import { Component, OnInit } from '@angular/core';
import listadecapitales from 'src/assets/json/datoscapitales.json';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  capitales: any = listadecapitales;

  title = 'Mi primer mapa';
  lat = 43.1612358;
  lng = -2.6911741;
  zoom = 9;


  constructor() {}

  infoWindowOpened: any = null;
  previousInfoWindow: any = null;

  selectMarker( infoWindow: any ) {
    if (this.previousInfoWindow === null) {
      this.previousInfoWindow = infoWindow;
    } else {
      this.infoWindowOpened = infoWindow;
      this.previousInfoWindow.close();
    }
    this.previousInfoWindow = infoWindow;
  }

  ngOnInit() {
    console.log(this.capitales);
  }

}
