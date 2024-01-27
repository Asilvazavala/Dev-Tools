import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';

interface sidebar_categories_props {
  id: number;
  icon?: string;
  name: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  imports: [SearchComponent],
})
export class SidebarComponent {
  sidebar_categories: sidebar_categories_props[] = [
    {
      id: 1,
      name: 'Colores',
      link: '/colores',
    },
    {
      id: 2,
      name: 'Componentes',
      link: '/componentes',
    },
    {
      id: 3,
      name: 'Deploy',
      link: '/deploy',
    },
    {
      id: 4,
      name: 'Fuentes',
      link: '/fuentes',
    },
    {
      id: 5,
      name: 'Iconos',
      link: '/iconos',
    },
  ];
}
