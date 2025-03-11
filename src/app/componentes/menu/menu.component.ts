import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-menu',
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  standalone: true,
  styleUrl: './menu.component.css',
  template: `
    <ul>
      <li *ngFor="let platillo of platillos">{{ platillo }}</li>
    </ul>
  `,
})
export class MenuComponent {
  @Input() platillos:{ nombre: string; precio: number }[] = [];
}
