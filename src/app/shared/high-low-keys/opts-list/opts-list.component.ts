import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opts-list',
  templateUrl: './opts-list.component.html',
  styleUrls: ['./opts-list.component.scss']
})
export class OptsListComponent implements OnInit {
  @Input() opts: Array<String>;
  @Input() focusedOptIndex: number;
  @Output() onKeySelected: EventEmitter<string> = new EventEmitter<string>();
  @Output() focusedOptIndexUpdated: EventEmitter<number> = new EventEmitter<number>();


  selectKey(selected: string) {
    this.onKeySelected.emit(selected);
  }

  setNewFocusedOptIndex(newIndex: number) {
    this.focusedOptIndexUpdated.emit(newIndex);
  }

  constructor() {}

  ngOnInit() {
  }

}
