import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class FeaturedService{
    constructor(private http:HttpClient){}
    private baseUrl='https://reqres.in/api/';
    private reqUrl='users?page=2';
    getList(){
        return this.http.get(this.baseUrl+this.reqUrl,{headers:this.getCommonHeaders()});
    }

    private getCommonHeaders(){
        return new HttpHeaders({
            'content-type': 'application/json'
        })
    }
}