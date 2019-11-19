import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{SocialLoginModule,AuthServiceConfig} from "angularx-social-login";
import { getAuthServiceConfigs } from './socialLoginConfig';
import{UserService} from './shared/user.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import{ HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AdvertisementDetailsComponent } from './advertisement-details/advertisement-details.component';
import { ListCategoryComponent } from './advertisement-details/list-category/list-category.component';
import { ListAdvertisementComponent } from './advertisement-details/list-advertisement/list-advertisement.component';
import { AdvertisementDetailComponent } from './advertisement-details/advertisement-detail/advertisement-detail.component';
import { AddAdvertisementComponent } from './advertisement-details/add-advertisement/add-advertisement.component';
import { AdvertisementService } from './shared/advertisement.service';
import { SerchAdvertisementComponent } from './advertisement-details/serch-advertisement/serch-advertisement.component';



@NgModule({
  declarations: [
    AppComponent,
    AdvertisementDetailsComponent,
    ListCategoryComponent,
    ListAdvertisementComponent,
    AdvertisementDetailComponent,
    AddAdvertisementComponent,
    SerchAdvertisementComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [AdvertisementService,UserService,
    {
      provide:AuthServiceConfig,
      useFactory:getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
