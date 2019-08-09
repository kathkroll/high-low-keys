import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IHighLowKeyOption } from '../shared/high-low-keys/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  baseUrl = 'assets/';

  constructor(private http: HttpClient) { }

  getSounds(filterBy: string): Observable<IHighLowKeyOption[]> {
    return this.http.get<IHighLowKeyOption[]>(this.baseUrl + 'mockData.json')
      .pipe(
        // TODO ideally a real api would accept the filter string and would only return relevant results
        map(sounds => {
          return sounds.filter((sound: IHighLowKeyOption) => sound.value.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1);
        })
      );
  }
}
