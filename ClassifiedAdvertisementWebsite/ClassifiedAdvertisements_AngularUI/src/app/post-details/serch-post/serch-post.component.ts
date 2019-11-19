import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post.model';
import { PostService } from 'src/app/shared/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { text } from '@angular/core/src/render3';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-serch-post',
  templateUrl: './serch-post.component.html',
  styleUrls: []
})
export class SerchPostComponent implements OnInit {
  listPost: PostModel[];
  text: string;
  sub: Subscription
  ruta: Subscription

  constructor(private _postService: PostService, private _router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activedRoute.params.subscribe(routeParams => {
      this.text = routeParams.findText;   //     this.text = params['findText'];
      this.ListPost();
    });
  }

  ListPost() {
    this.sub = this._postService.getListPostBySearch(this.text).subscribe((list: PostModel[]) => {
      this.listPost = list;
    })
  }
}
