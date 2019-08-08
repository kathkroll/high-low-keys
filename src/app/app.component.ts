import { Component, OnInit } from '@angular/core';

import { MockDataService } from './core/mock-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'high-low-keys';
  highLowSoundKeys: Object[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit() {
    this.mockDataService.getSounds('')
      .subscribe((sounds: Object[]) => this.highLowSoundKeys = sounds);
  }

}
