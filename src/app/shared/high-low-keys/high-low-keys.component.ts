import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-high-low-keys',
  templateUrl: './high-low-keys.component.html',
  styleUrls: ['./high-low-keys.component.scss']
})
export class HighLowKeysComponent implements OnInit {
  
  constructor() { }

  @Input() optsComplete: Array<Object>;
  @Output() fetchResultsWithFilter: EventEmitter<string> = new EventEmitter<string>();

  highLevelOpts: Array<String> = [];
  highKeySearch: string = '';

  updateSearch(newValue) {
    // TODO change length check to a configurable param
    if(newValue.length >= 3) {
      this.fetchResultsWithFilter.emit(this.highKeySearch);
    }
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optsComplete) {
      this.highLevelOpts = this.optsComplete.map(o => o['value']);
    }
  }

}
