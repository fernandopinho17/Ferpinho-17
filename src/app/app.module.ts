import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescricaoComponent } from './components/container/descricao/descricao.component';
import { ExperienciaProfissionalComponent } from './components/container/experiencia-profissional/experiencia-profissional.component';
import { FerramentasComponent } from './components/container/ferramentas/ferramentas.component';
import { ContainerComponent } from './components/container/container.component';
import { Certificados } from './components/container/certificados/certificados';
import { Projectos } from './components/container/projectos/projectos';


@NgModule({
  declarations: [
    AppComponent,
    DescricaoComponent,
    ExperienciaProfissionalComponent,
    FerramentasComponent,
    ContainerComponent,
    Certificados,
    Projectos,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
