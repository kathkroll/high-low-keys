import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'high-low-keys';
  highLowSoundKeys: Array<Object> = [
    {
      value: "Spider Monkey",
      subOpts: [
        "Bark",
        "Whinny",
        "Chitter",
        "Whoop"
      ],
    },
    { value: "Howler Monkey", subOpts: [], },
    { value: "Chainsaw", subOpts: [], },
    { value: "Capuchin Monkey", subOpts: [], },
    { value: "Squirrel Monkey", subOpts: [], },
    { value: "Gunshot", subOpts: [], },
  ];
}
