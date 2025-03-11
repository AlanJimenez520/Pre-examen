import { Component } from '@angular/core';
import { HeaderComponent } from './componentes/header/header.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <header-component [title]="title"></header-component>
    <menu-component [platillos]="platillos"></menu-component>
    <footeru-component [info]="infoFooter"></footeru-component>
  `,
  standalone: true,
  imports: [HeaderComponent,MenuComponent,FooterComponent, CommonModule,]
})
export class AppComponent {
  title = 'Restaurante Angular';

  platillos = [
    { nombre: 'Tacos al pastor', precio: 50 },
    { nombre: 'Enchiladas', precio: 70 },
    { nombre: 'Pozole', precio: 80 },
    { nombre: 'Tamales', precio: 40 },
    { nombre: 'Refrescos', precio: 30 },
    { nombre: 'Burrito', precio: 60 },
    { nombre: 'Rebanada Pizza', precio: 50 },
    { nombre: 'Dogo', precio: 45 },
    { nombre: 'Flautas', precio: 32 },
    { nombre: 'Hamburguesa', precio: 89 },
  ];
  infoFooter = `Nos encontramos en República de Paraguay 124, Agricultura, 20234 Aguascalientes, Ags`;

}