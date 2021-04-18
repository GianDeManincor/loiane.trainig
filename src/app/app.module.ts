import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';
import { ContentComponent } from './content/content.component';
import { DiretivaNgswitchComponent } from './diretiva-ngswitch/diretiva-ngswitch.component';
import { DiretivaNgforComponent } from './diretiva-ngfor/diretiva-ngfor.component';
import { DiretivaNgcontentComponent } from './diretiva-ngcontent/diretiva-ngcontent.component';
import { ExemploNgcontentComponent } from './diretiva-ngcontent/exemplo-ngcontent/exemplo-ngcontent.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputPropertyComponent,
    OutputPropertyComponent,
    DiretivaNgifComponent,
    ContentComponent,
    DiretivaNgswitchComponent,
    DiretivaNgforComponent,
    DiretivaNgcontentComponent,
    ExemploNgcontentComponent,
    ListaCursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
