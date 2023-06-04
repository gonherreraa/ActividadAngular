import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MiListadoComponent } from './views/mi-listado/mi-listado.component';
import { TareaComponent } from './views/mi-listado/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    MiListadoComponent,
    TareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
