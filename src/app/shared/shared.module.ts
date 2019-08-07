import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighLowKeysComponent } from './high-low-keys/high-low-keys.component';


@NgModule({
  declarations: [HighLowKeysComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HighLowKeysComponent]
})
export class SharedModule { }
