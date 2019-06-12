import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/shared/post.model'
import { PostService } from 'src/app/shared/post.service';
import { Router } from '@angular/router';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: []
})
export class AddPostComponent implements OnInit {
  public newPost: PostModel;
  public idPost: string
  selectedFile = null
  public urlImg: string

  constructor(private _service: PostService, private _router: Router) {
    this.newPost = new PostModel();
  }

  ngOnInit() {
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  addNewPost(form: NgForm) {

    if (form.valid) {
      if (this.selectedFile.length === 0) {
        this.addDataPost();
      }
      else{
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);
      this._service.postImage(formData).subscribe(event => {
        this.urlImg = event;
        console.log(this.urlImg);
        this.newPost.image = this.urlImg
        this.addDataPost();
      })
    }
    }
  }

  addDataPost() {
    this._service.postAdd(this.newPost).subscribe((res) => {//
      console.log('success');
      console.log(res);
      this._router.navigate(['/PostDetail', res]);
    },
      err => {
        console.log(err);
      });
  }
    

   
}//principal de la clase
