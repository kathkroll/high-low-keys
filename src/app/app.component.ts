import { Component, OnInit } from '@angular/core';

import { MockDataService } from './core/mock-data.service';
import { ISelectedKeys, IHighLowKeyOption } from './shared/high-low-keys/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'high-low-keys';
  highLowSoundKeys: object[] = [];
  selectedHighKeySound = '';
  selectedLowKeySound = '';

  soundSelectionUpdated(newKeys: ISelectedKeys) {
    this.selectedHighKeySound = newKeys.highKey;
    this.selectedLowKeySound = newKeys.lowKey;
  }

  constructor(private mockDataService: MockDataService) {}

  fetchSounds(searchFor: string) {
    this.mockDataService.getSounds(searchFor)
      .subscribe((sounds: IHighLowKeyOption[]) => this.highLowSoundKeys = sounds);
  }

  ngOnInit() { }

}
