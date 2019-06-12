import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPostComponent } from './post-details/add-post/add-post.component'
import { ListPostComponent } from './post-details/list-post/list-post.component'
import { ListCategoryComponent } from './post-details/list-category/list-category.component'
import { PostDetailComponent } from './post-details/post-detail/post-detail.component'
import { SerchPostComponent } from './post-details/serch-post/serch-post.component'

const routes: Routes = [
  { path: 'ListCategory', component: ListCategoryComponent },
  { path: 'ListPost/:category', component: ListPostComponent },
  { path: 'PostDetail/:id', component: PostDetailComponent },
  { path: 'PostSearch/:findText', component: SerchPostComponent },
  { path: 'NewPost', component: AddPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
