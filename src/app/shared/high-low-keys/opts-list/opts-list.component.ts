import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opts-list',
  templateUrl: './opts-list.component.html',
  styleUrls: ['./opts-list.component.scss']
})
export class OptsListComponent implements OnInit {
  @Input() opts: Array<String>;
  

  constructor() { }

  ngOnInit() {
  }

}
