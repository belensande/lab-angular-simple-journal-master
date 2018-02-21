import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class JournalService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) { }

  getList() {
    return this.http.get(`${this.BASE_URL}/api/journal-entries`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/journal-entries/${id}`)
      .map((res) => res.json());
  }

  add(entry) {
    return this.http.post(`${this.BASE_URL}/api/journal-entries/`, entry)
      .map((res) => {
        return res.json();
      })
      .catch((err) => { return Observable.throw(err.json())});
  }
}
