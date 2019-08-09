import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { ISelectedKeys, IHighLowKeyOption } from './interfaces';

@Component({
  selector: 'app-high-low-keys',
  templateUrl: './high-low-keys.component.html',
  styleUrls: ['./high-low-keys.component.scss']
})
export class HighLowKeysComponent implements OnInit, OnChanges {

  constructor() {
    this.highKeySearchChanged
      .pipe(debounceTime(500))
    .subscribe((newValue) => {
      // TODO change length check to a configurable param
      this.resetDefault();
      if (newValue.length >= 3) {
        console.log('fetching results now');
        this.fetchResultsWithFilter.emit(this.highKeySearch);
      } else {
        this.highLevelOpts = [];
      }
    });
  }

  @Input() optsComplete: IHighLowKeyOption[];
  @Output() fetchResultsWithFilter: EventEmitter<string> = new EventEmitter<string>();
  @Output() keysSelected: EventEmitter<ISelectedKeys> = new EventEmitter<ISelectedKeys>();

  highLevelOpts: Array<string> = [];
  selectedSubOpts: Array<string> = [];
  highKeySearch = '';
  selectedKeys: ISelectedKeys = {
    highKey: '',
    lowKey: ''
  };
  focusedOptIndex = 0;

  private highKeySearchChanged = new Subject<string>();

  updateSearch(newValue) {
    console.log('text input updated');
    this.highKeySearchChanged.next(newValue);
  }

  resetDefault() {
    this.selectedKeys = {
      highKey: '',
      lowKey: ''
    };
    this.selectedSubOpts = [];
    this.focusedOptIndex = 0;
    this.keysSelected.emit(this.selectedKeys);
  }

  highKeySelected(selected: string) {
    this.selectedKeys.highKey = this.highKeySearch = selected;
    this.selectedSubOpts = this.optsComplete.find(k => k.value === selected).subOpts;
    this.keysSelected.emit(this.selectedKeys);
  }

  lowKeySelected(selected: string) {
    this.selectedKeys.lowKey = selected;
    this.keysSelected.emit(this.selectedKeys);
  }

  updateFocusedOptIndex(newIndex: number) {
    this.focusedOptIndex = newIndex;
  }

  incrementFocusedOptIndex() {
    if (this.focusedOptIndex < this.highLevelOpts.length - 1) {
      this.updateFocusedOptIndex(this.focusedOptIndex + 1);
    }
  }

  decrementFocusedOptIndex() {
    if (this.focusedOptIndex > 0) {
      this.updateFocusedOptIndex(this.focusedOptIndex - 1);
    }
  }

  setCurrentIndexAsSelected() {
    this.highKeySelected(this.highLevelOpts[this.focusedOptIndex]);
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optsComplete) {
      this.highLevelOpts = this.optsComplete.map(o => o.value);
    }
  }

}
