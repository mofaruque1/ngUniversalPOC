import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {

  records:any;
  constructor(private http:Http) { }
  getData(){
    return this.http.get('https://raw.githubusercontent.com/mofaruque1/serverfile/master/data.json'+'?hash_id'+Math.random())
    .map(res => res.json());
  
  }

}
