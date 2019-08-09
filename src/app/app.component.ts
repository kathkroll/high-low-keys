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
  selectedHighKeySound: string = "";
  selectedLowKeySound: string= "";

  soundSelectionUpdated(newKeys: object) {
    this.selectedHighKeySound = newKeys['highKey'];
    this.selectedLowKeySound = newKeys['lowKey'];
  }

  constructor(private mockDataService: MockDataService) {}

  fetchSounds(searchFor: string) {
    this.mockDataService.getSounds(searchFor)
      .subscribe((sounds: Object[]) => this.highLowSoundKeys = sounds);
  }

  ngOnInit() { }

}
