import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAdvertisementComponent } from './advertisement-details/add-advertisement/add-advertisement.component'
import { ListAdvertisementComponent } from './advertisement-details/list-advertisement/list-advertisement.component'
import { ListCategoryComponent } from './advertisement-details/list-category/list-category.component'
import { AdvertisementDetailComponent } from './advertisement-details/advertisement-detail/advertisement-detail.component'
import { SerchAdvertisementComponent } from './advertisement-details/serch-advertisement/serch-advertisement.component'

const routes: Routes = [
  { path: 'ListCategory', component: ListCategoryComponent },
  { path: 'ListAdvertisement/:category', component: ListAdvertisementComponent },
  { path: 'AdvertisementDetail/:id', component: AdvertisementDetailComponent },
  { path: 'AdvertisementSearch/:findText', component: SerchAdvertisementComponent },
  { path: 'NewAdvertisement', component: AddAdvertisementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
