import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

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
      if(newValue.length >= 3) {
        console.log("fetching results now");
        this.fetchResultsWithFilter.emit(this.highKeySearch);
      }
    })  
  }

  @Input() optsComplete: Array<Object>;
  @Output() fetchResultsWithFilter: EventEmitter<string> = new EventEmitter<string>();

  highLevelOpts: Array<String> = [];
  highKeySearch: string = '';
  private highKeySearchChanged = new Subject<string>();

  updateSearch(newValue) {    
    console.log("text input updated");
    this.highKeySearchChanged.next(newValue);
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.optsComplete) {
      this.highLevelOpts = this.optsComplete.map(o => o['value']);
    }
  }

}
