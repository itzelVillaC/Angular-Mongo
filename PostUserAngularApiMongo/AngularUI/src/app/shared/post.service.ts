import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostModel } from './post.model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})

export class PostService {

    public readonly rootUrl = 'http://localhost:54017/api';
    constructor(private http: HttpClient, private userService: UserService) { }
    createHeader() {
        //acces user from local storage
        let data = this.userService.getToken();
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + data);
        return headers;
    }

    getListPostByCategory(category: string) {
        return this.http.get(this.rootUrl + '/posts/' + category, {});
    }
    getPostById(id: string) {
        return this.http.get(this.rootUrl + "/posts/id/" + id)
    }

    postAdd(data: PostModel) {//
        return this.http.post(this.rootUrl + '/posts/data/', data, { headers: this.createHeader(), responseType: 'text' });
    }

    getListCategorys() {
        return this.http.get(this.rootUrl + '/category');
    }

    getListPostBySearch(search: string) {
        return this.http.get(this.rootUrl + '/posts/search/' + search, {});
    }

    checkUserDB(check: number) {
        return this.http.post(this.rootUrl + '/user/', check, { headers: this.createHeader() });
    }

    postImage(form) {
        return this.http.post(this.rootUrl + '/posts/image/', form, { headers: this.createHeader(), responseType: 'text' });
    }

}
