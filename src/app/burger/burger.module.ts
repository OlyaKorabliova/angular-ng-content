import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BurgerComponent } from './burger.component';
import { DefaultContentComponent } from './components/default-content/default-content.component';
import { VeganContentComponent } from './components/vegan-content/vegan-content.component';

@NgModule({
  declarations: [
    DefaultContentComponent,
    BurgerComponent,
    VeganContentComponent,
  ],
  imports: [BrowserModule],
  exports: [DefaultContentComponent, BurgerComponent, VeganContentComponent],
})
export class BurgerModule {}
