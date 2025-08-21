import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'meu-site';
  constructor(private router: Router) {}

  ngOnInit() {
    // Inicializa o AOS
    AOS.init({
      duration: 1000, // duração da animação
      once: true,     // anima apenas uma vez
      mirror: false   // não repete ao rolar para cima
    });

    // Atualiza animações ao trocar de página
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }
}
