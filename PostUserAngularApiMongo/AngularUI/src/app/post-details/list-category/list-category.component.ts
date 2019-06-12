import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { CategoryModel } from 'src/app/shared/category.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: []
})
export class ListCategoryComponent implements OnInit {
  listCategory: CategoryModel[];

  constructor(private _service: PostService, private _router: Router) { }

  ngOnInit() {
    this.loadCategorys();
  }

  loadCategorys() {
    this._service.getListCategorys().subscribe((list: CategoryModel[]) => {
      this.listCategory = list;
    });
  }

}
