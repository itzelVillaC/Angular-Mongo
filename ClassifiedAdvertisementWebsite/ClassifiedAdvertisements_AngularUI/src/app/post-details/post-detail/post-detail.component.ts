import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/shared/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: []
})
export class PostDetailComponent implements OnInit {
  public postModel: PostModel;
  id: string;
  path: string;

  constructor(private _postService: PostService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.detailPost();
    this.path = this._postService.rootUrl;
  }

  detailPost() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this._postService.getPostById(this.id).subscribe((post: PostModel) => {
      this.postModel = post;
    })

  }
}
