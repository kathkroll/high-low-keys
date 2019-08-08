import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-high-low-keys',
  templateUrl: './high-low-keys.component.html',
  styleUrls: ['./high-low-keys.component.scss']
})
export class HighLowKeysComponent implements OnInit {
  @Input() optsComplete: Array<Object>;

  highLevelOpts: Array<String> = [];

  highKey: string = '';
  lowKey: string = '';

  constructor() { }

  ngOnInit() {
    this.highLevelOpts = this.optsComplete.map(o => o['value']);
  }

}
