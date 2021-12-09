import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BottleModule } from './bottles/bottle.module';
import { CokeModule } from './bottles/coke/coke.module';
import { FantaModule } from './bottles/fanta/fanta.module';
import { BurgerModule } from './burger/burger.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BurgerModule, BottleModule, FantaModule, CokeModule],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
