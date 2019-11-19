import { Component, OnInit } from '@angular/core';
import { AdvertisementService } from 'src/app/shared/advertisement.service';
import { CategoryModel } from 'src/app/shared/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: []
})
export class ListCategoryComponent implements OnInit {
  listCategory: CategoryModel[];

  constructor(private _service: AdvertisementService, private _router: Router) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._service.getListCategories().subscribe((list: CategoryModel[]) => {
      this.listCategory = list;
    });
  }

}
