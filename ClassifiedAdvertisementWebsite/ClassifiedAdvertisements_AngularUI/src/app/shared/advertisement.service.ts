import { Injectable, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AdvertisementModel } from './advertisement.model';
import { UserService } from './user.service';

@Injectable({
    providedIn: 'root'
})

export class AdvertisementService {

    public readonly rootUrl = 'http://localhost:54017/api';
    constructor(private http: HttpClient, private userService: UserService) { }
    createHeader() {
        //acces user from local storage
        let data = this.userService.getToken();
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer ' + data);
        return headers;
    }

    getListAdvertisementByCategory(category: string) {
        return this.http.get(this.rootUrl + '/advertisement/' + category, {});
    }
    getAdvertisementById(id: string) {
        return this.http.get(this.rootUrl + "/advertisement/id/" + id)
    }

    advertisementAdd(data: AdvertisementModel) {//
        return this.http.post(this.rootUrl + '/advertisement/data/', data, { headers: this.createHeader(), responseType: 'text' });
    }

    getListCategories() {
        return this.http.get(this.rootUrl + '/category');
    }

    getListAdvertisementBySearch(search: string) {
        return this.http.get(this.rootUrl + '/advertisement/search/' + search, {});
    }

    checkUserDB(check: number) {
        return this.http.post(this.rootUrl + '/user/', check, { headers: this.createHeader() });
    }

    advertisementImage(form) {
        return this.http.post(this.rootUrl + '/advertisement/image/', form, { headers: this.createHeader(), responseType: 'text' });
    }

}
