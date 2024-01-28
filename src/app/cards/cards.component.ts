import { Component } from '@angular/core';

interface cards_props {
  id: number;
  image: string;
  title: string;
  categories: string[];
  description: string;
  link: string;
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  cards: cards_props[] = [
    {
      id: 1,
      image: '/assets/images/categories/colors/Color Hunt.png',
      title: 'Color Hunt',
      categories: ['Colors'],
      description:
        'Colección de paleta de colores para diseñadores y artistas, cuenta con filtros por popularidad, color, recientes, etc.',
      link: 'https://colorhunt.co/',
    },
    {
      id: 2,
      image: '/assets/images/categories/colors/UI Colors.png',
      title: 'UI Colors',
      categories: ['Colors'],
      description:
        'Generador de paleta de colores para TailwindCSS, cuenta con ejemplos de uso en imágenes, banners, botones, etc.',
      link: 'https://uicolors.app/create',
    },
    {
      id: 3,
      image: '/assets/images/categories/colors/Tints.png',
      title: 'Tints',
      categories: ['Colors'],
      description:
        'Generador de paleta de colores y API para TailwindCSS, donde puedes personalizar el matiz, saturación, luminosidad, etc.',
      link: 'https://www.tints.dev/',
    },
    {
      id: 4,
      image: '/assets/images/categories/colors/Happy Hues.png',
      title: 'Happy Hues',
      categories: ['Colors'],
      description:
        'Colección de paleta de colores, como curiosidad te explica la psicología de cada color para determinar su uso.',
      link: 'https://www.happyhues.co/',
    },
    {
      id: 5,
      image: '/assets/images/categories/colors/Siege Media.png',
      title: 'Siege Media',
      categories: ['Colors'],
      description:
        'Herramienta para calcular fácilmente el radio de contraste entre un color de fondo y un color de texto.',
      link: 'https://www.siegemedia.com/contrast-ratio',
    },
    {
      id: 6,
      image: '/assets/images/categories/colors/Color Review.png',
      title: 'Happy Hues',
      categories: ['Colors'],
      description:
        'Explorar y encuentra colores accesibles comparando el contraste entre un color de fondo y un color de texto.',
      link: 'https://color.review/',
    },
  ];
}
