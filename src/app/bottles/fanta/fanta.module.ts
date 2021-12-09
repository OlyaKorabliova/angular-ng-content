import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FantaLidComponent } from './lid/fanta-lid.component';
import { FantaWrapComponent } from './wrap/fanta-wrap.component';

@NgModule({
  declarations: [FantaLidComponent, FantaWrapComponent],
  imports: [BrowserModule],
  exports: [FantaLidComponent, FantaWrapComponent],
})
export class FantaModule {}
