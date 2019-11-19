import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/shared/advertisement.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AdvertisementModel } from 'src/app/shared/advertisement.model';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: []
})
export class AdvertisementDetailComponent implements OnInit {
  public advertisementModel: AdvertisementModel;
  id: string;
  path: string;

  constructor(private _advertisementService: AdvertisementService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detailAdvertisement();
    this.path = this._advertisementService.rootUrl;
  }

  detailAdvertisement() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this._advertisementService.getAdvertisementById(this.id).subscribe((advertisement: AdvertisementModel) => {
      this.advertisementModel = advertisement;
    })

  }
}
