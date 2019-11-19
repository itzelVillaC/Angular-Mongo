import { Component, OnInit } from '@angular/core';
import { AdvertisementModel } from 'src/app/shared/advertisement.model'
import { AdvertisementService } from 'src/app/shared/advertisement.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';
import { CategoryModel } from 'src/app/shared/category.model';

@Component({
  selector: 'app-add-advertisement',
  templateUrl: './add-advertisement.component.html',
  styleUrls: []
})
export class AddAdvertisementComponent implements OnInit {
  public newAdvertisement: AdvertisementModel;
  public idAdvertisement: string
  selectedFile = null
  public urlImg: string
  listCategory: CategoryModel[];

  constructor(private _service: AdvertisementService, private _router: Router) {
    this.newAdvertisement = new AdvertisementModel();
  }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this._service.getListCategories().subscribe((list: CategoryModel[]) => {
      this.listCategory = list;
    });
  }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  

  addNewAdvertisement(form: NgForm) {

    if (form.valid) {
      if (this.selectedFile.length === 0) {
        this.addDataAdvertisement();
      }
      else{
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this._service.advertisementImage(formData).subscribe(event => {
        this.urlImg = event;
        console.log(this.urlImg);
        this.newAdvertisement.image = this.urlImg
        this.addDataAdvertisement();
      })
    }
    }
  }

  addDataAdvertisement() {
    this._service.advertisementAdd(this.newAdvertisement).subscribe((res) => {//
      console.log('success');
      console.log(res);
      this._router.navigate(['/AdvertisementDetail', res]);
    },
      err => {
        console.log(err);
      });
  }
    

   
}
