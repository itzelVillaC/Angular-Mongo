import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/shared/advertisement.service';
import { AdvertisementModel } from 'src/app/shared/advertisement.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-advertisement',
  templateUrl: './list-advertisement.component.html',
  styleUrls: []
})
export class ListAdvertisementComponent implements OnInit {
  listAdvertisement: AdvertisementModel[];
  category: string;

  constructor(private _advertisementService: AdvertisementService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ListAdvertisement();
  }


  ListAdvertisement() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    })
    this._advertisementService.getListAdvertisementByCategory(this.category).subscribe((list: AdvertisementModel[]) => {
      this.listAdvertisement = list;
      //console.log(list)
    })
  }
}
