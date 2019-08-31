import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//This moduel usede to share same moduels
@NgModule({
  exports: [CommonModule],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
