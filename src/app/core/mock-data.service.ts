import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  baseUrl: string = 'assets/';

  constructor(private http: HttpClient) { }

  getSounds(filterBy: string) : Observable<Object[]> {
  	return this.http.get<Object[]>(this.baseUrl + 'mockData.json')
      .pipe(
        // TODO ideally a real api would accept the filter string and would only return relevant results
        map(sounds => {
          let filteredSounds = sounds.filter((sound: Object) => sound["value"].toLowerCase().indexOf(filterBy.toLowerCase()) != -1);
          return filteredSounds;
        })
      );
  }
}
