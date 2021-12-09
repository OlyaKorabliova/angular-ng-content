import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CokeLidComponent } from './lid/coke-lid.component';
import { CokeWrapComponent } from './wrap/coke-wrap.component';

@NgModule({
  declarations: [CokeLidComponent, CokeWrapComponent],
  imports: [BrowserModule],
  exports: [CokeLidComponent, CokeWrapComponent],
})
export class CokeModule {}
