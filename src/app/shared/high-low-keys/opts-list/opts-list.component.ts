import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-opts-list',
  templateUrl: './opts-list.component.html',
  styleUrls: ['./opts-list.component.scss']
})
export class OptsListComponent implements OnInit {
  @Input() opts: Array<String>;
  @Output() onKeySelected: EventEmitter<string> = new EventEmitter<string>();

  selectKey(selected: string) {
    this.onKeySelected.emit(selected);
  }

  constructor() { }

  ngOnInit() {
  }

}
