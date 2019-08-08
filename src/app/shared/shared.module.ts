import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighLowKeysComponent } from './high-low-keys/high-low-keys.component';
import { OptsListComponent } from './high-low-keys/opts-list/opts-list.component';


@NgModule({
  declarations: [HighLowKeysComponent, OptsListComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HighLowKeysComponent]
})
export class SharedModule { }
