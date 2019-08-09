import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ISelectedKeys, IHighLowKeyOptions } from './interfaces'

@Component({
  selector: 'app-high-low-keys',
  templateUrl: './high-low-keys.component.html',
  styleUrls: ['./high-low-keys.component.scss']
})
export class HighLowKeysComponent implements OnInit {
  
  constructor() {
    this.highKeySearchChanged
      .pipe(debounceTime(500))
    .subscribe((newValue) => {
      // TODO change length check to a configurable param
      this.selectedKeys.highKey = '';
      if(newValue.length >= 3) {
        console.log("fetching results now");
        this.fetchResultsWithFilter.emit(this.highKeySearch);
      }
    })  
  }

  @Input() optsComplete: IHighLowKeyOptions[];
  @Output() fetchResultsWithFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() onKeysSelected: EventEmitter<ISelectedKeys> = new EventEmitter<ISelectedKeys>();

  highLevelOpts: Array<string> = [];
  selectedSubOpts: Array<string> = [];
  highKeySearch: string = '';
  selectedKeys: ISelectedKeys = {
    highKey: '',
    lowKey: ''
  }

  private highKeySearchChanged = new Subject<string>();

  updateSearch(newValue) {    
    console.log("text input updated");
    this.highKeySearchChanged.next(newValue);
  }

  highKeySelected(selected: string) {
    this.selectedKeys.highKey = this.highKeySearch = selected;
    this.selectedSubOpts = this.optsComplete.find(k => k.value === selected).subOpts;
    this.onKeysSelected.emit(this.selectedKeys);
  }

  lowKeySelected(selected: string) {
    this.selectedKeys.lowKey = selected;
    this.onKeysSelected.emit(this.selectedKeys);
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optsComplete) {
      this.highLevelOpts = this.optsComplete.map(o => o['value']);
    }
  }

}
