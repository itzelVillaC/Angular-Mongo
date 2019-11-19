import { Component, OnInit } from '@angular/core';
import { AdvertisementModel } from 'src/app/shared/advertisement.model';
import { AdvertisementService } from 'src/app/shared/advertisement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-serch-advertisement',
  templateUrl: './serch-advertisement.component.html',
  styleUrls: []
})
export class SerchAdvertisementComponent implements OnInit {
  listAdvertisement: AdvertisementModel[];
  text: string;
  sub: Subscription
  ruta: Subscription

  constructor(private _advertisementService: AdvertisementService, private _router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(routeParams => {
      this.text = routeParams.findText;   //     this.text = params['findText'];
      this.ListAdvertisement();
    });
  }

  ListAdvertisement() {
    this.sub = this._advertisementService.getListAdvertisementBySearch(this.text).subscribe((list: AdvertisementModel[]) => {
      this.listAdvertisement = list;
    })
  }
}
