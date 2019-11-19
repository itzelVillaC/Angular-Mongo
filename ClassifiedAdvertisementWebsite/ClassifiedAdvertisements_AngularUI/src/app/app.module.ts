import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{SocialLoginModule,AuthServiceConfig} from "angularx-social-login";
import { getAuthServiceConfigs } from './socialLoginConfig';
import{UserService} from './shared/user.service';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import{ HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { ListCategoryComponent } from './post-details/list-category/list-category.component';
import { ListPostComponent } from './post-details/list-post/list-post.component';
import { PostDetailComponent } from './post-details/post-detail/post-detail.component';
import { AddPostComponent } from './post-details/add-post/add-post.component';
import { PostService } from './shared/post.service';
import { SerchPostComponent } from './post-details/serch-post/serch-post.component';



@NgModule({
  declarations: [
    AppComponent,
    PostDetailsComponent,
    ListCategoryComponent,
    ListPostComponent,
    PostDetailComponent,
    AddPostComponent,
    SerchPostComponent  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [PostService,UserService,
    {
      provide:AuthServiceConfig,
      useFactory:getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
