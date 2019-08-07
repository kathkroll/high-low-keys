import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-low-keys',
  templateUrl: './high-low-keys.component.html',
  styleUrls: ['./high-low-keys.component.scss']
})
export class HighLowKeysComponent implements OnInit {

  highKey: string = '';
  lowKey: string = '';

  constructor() { }

  ngOnInit() {
  }

}
