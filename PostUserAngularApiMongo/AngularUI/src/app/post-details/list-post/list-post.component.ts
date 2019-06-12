import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/shared/post.service';
import { PostModel } from 'src/app/shared/post.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: []
})
export class ListPostComponent implements OnInit {
  listPost: PostModel[];
  category: string;

  constructor(private _postService: PostService, private _router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.ListPost();
  }


  ListPost() {
    this.route.params.subscribe(params => {
      this.category = params['category'];
    })
    this._postService.getListPostByCategory(this.category).subscribe((list: PostModel[]) => {
      this.listPost = list;
      //console.log(list)
    })
  }
}
