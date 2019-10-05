import { ServiceService } from './../../service/service.service';
import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/service/model';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  loadedPlaces: Place[];

  constructor(
    private placesService: ServiceService
  ) { }

  ngOnInit() {
    this.loadedPlaces = this.placesService.places;
  }

}
