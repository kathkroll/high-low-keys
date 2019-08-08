import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getSounds(filterBy: string) : Observable<Object[]> {
  	return this.http.get<Object[]>(this.baseUrl + 'mockData.json')
  }
}
