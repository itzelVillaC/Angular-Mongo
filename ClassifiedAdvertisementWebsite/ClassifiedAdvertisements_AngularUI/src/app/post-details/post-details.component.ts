import { Component, OnInit } from '@angular/core';
import { SocialUser, AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from '../shared/user.service';
import { PostService } from '../shared/post.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: []
})
export class PostDetailsComponent implements OnInit {
  findText: string;
  private user: SocialUser;
  constructor(private authService: AuthService, public userSerivce: UserService, private servicePost: PostService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this._router.navigate(['/ListCategory']);
    this.user = this.userSerivce.getData();
    if (this.user) {
      this.userSerivce.userLoggedIn.emit(true);

    }
  }

  signinWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.authService.authState.subscribe((userInfo) => {
      if (userInfo) {
        this.user = userInfo;
        this.userSerivce.storeData(userInfo);
        this.userSerivce.userLoggedIn.emit(true);
        //check if user exist if not insert new one   
        this.servicePost.checkUserDB(1).subscribe();
      }
    });
  }

  logOut() {
    this.userSerivce.logOut();
    this.user = null;
    this.userSerivce.userLoggedIn.emit(false);
    this._router.navigate(['/ListCategory']);
  }
}
