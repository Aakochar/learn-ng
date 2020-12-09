import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  searchUrl = '//openlibrary.org/search.json?q=the+lord+of+the+rings';

  constructor(private http: HttpClient) {}

  getSearchResults() {
    return this.http.get(this.searchUrl);
  }
}
