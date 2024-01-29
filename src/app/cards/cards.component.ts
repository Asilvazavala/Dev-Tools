import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DropdownComponent } from '../dropdown/dropdown.component';
import { SharedService } from '../shared.service';

interface cards_props {
  id: number;
  image: string;
  title: string;
  categories: string[];
  description: string;
  link: string;
  keywords?: string[];
}

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
  imports: [DropdownComponent],
})
export class CardsComponent implements OnInit {
  currentCategory = '';
  filteredCards: cards_props[] = [];

  constructor(private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.filteredCards = this.cards;

    this.sharedService.currentCategory$.subscribe((category) => {
      this.currentCategory = category;
      this.filterCardsByCategory();
    });
  }

  private filterCardsByCategory(): void {
    // if (this.filteredCards.length === 0) {
    //   this.router.navigate(['/not-found']);
    // }

    if (this.currentCategory) {
      this.filteredCards = this.cards.filter((card) =>
        card.categories.includes(this.currentCategory)
      );
    } else if (this.currentCategory === '') {
      this.filteredCards = this.cards.filter((card) =>
        card.categories.includes('populares')
      );
    } else {
      this.filteredCards = this.cards;
    }
  }

  cards: cards_props[] = [
    {
      id: 1,
      image: '/assets/images/categories/colors/Color Hunt.webp',
      title: 'Color Hunt',
      categories: ['colores', 'populares'],
      description:
        'Colección de paleta de colores para diseñadores y artistas, cuenta con filtros por popularidad, color, recientes, etc.',
      link: 'https://colorhunt.co/',
      keywords: ['color'],
    },
    {
      id: 2,
      image: '/assets/images/categories/colors/UI Colors.webp',
      title: 'UI Colors',
      categories: ['colores'],
      description:
        'Generador de paleta de colores para TailwindCSS, cuenta con ejemplos de uso en imágenes, banners, botones, etc.',
      link: 'https://uicolors.app/create',
      keywords: ['color'],
    },
    {
      id: 3,
      image: '/assets/images/categories/colors/Tints.webp',
      title: 'Tints',
      categories: ['colores'],
      description:
        'Generador de paleta de colores y API para TailwindCSS, donde puedes personalizar el matiz, saturación, luminosidad, etc.',
      link: 'https://www.tints.dev/',
      keywords: ['color'],
    },
    {
      id: 4,
      image: '/assets/images/categories/colors/Happy Hues.webp',
      title: 'Happy Hues',
      categories: ['colores'],
      description:
        'Colección de paleta de colores, como curiosidad te explica la psicología de cada color para determinar su uso.',
      link: 'https://www.happyhues.co/',
      keywords: ['color'],
    },
    {
      id: 5,
      image: '/assets/images/categories/colors/Siege Media.webp',
      title: 'Siege Media',
      categories: ['colores'],
      description:
        'Herramienta para calcular fácilmente el radio de contraste entre un color de fondo y un color de texto.',
      link: 'https://www.siegemedia.com/contrast-ratio',
      keywords: ['color', 'contraste'],
    },
    {
      id: 6,
      image: '/assets/images/categories/colors/Color Review.webp',
      title: 'Happy Hues',
      categories: ['colores'],
      description:
        'Explora y encuentra colores accesibles comparando el contraste entre un color de fondo y un color de texto.',
      link: 'https://color.review/',
      keywords: ['color', 'contraste'],
    },
    {
      id: 7,
      image: '/assets/images/categories/components/Keep.webp',
      title: 'Keep',
      categories: ['componentes'],
      description:
        'Explora más de 40 componentes de React y elementos interactivos, diseñados con TailwindCSS.',
      link: 'https://react.keepdesign.io/',
      keywords: ['react', 'componente', 'tailwind'],
    },
    {
      id: 8,
      image: '/assets/images/categories/components/Next UI.webp',
      title: 'Next UI',
      categories: ['componentes', 'populares'],
      description:
        'Colección de componentes modernos de React construidos con TailwindCSS, cuenta con reconocimiento automático de modo claro/oscuro.',
      link: 'https://nextui.org/',
      keywords: ['react', 'componente', 'tailwind'],
    },
    {
      id: 9,
      image: '/assets/images/categories/components/Tremor.webp',
      title: 'Tremor',
      categories: ['componentes'],
      description:
        'Colección de componentes modernos de React construidos con TailwindCSS, enfocados en gráficos y estadísticas.',
      link: 'https://www.tremor.so/components',
      keywords: ['react', 'componente', 'tailwind'],
    },
    {
      id: 10,
      image: '/assets/images/categories/components/Flowbite.webp',
      title: 'Flowbite',
      categories: ['componentes'],
      description:
        'Extensa confección de más de 63 componentes hechos con TailwindCSS para React, Angular, Vue, etc.',
      link: 'https://flowbite.com/#components',
      keywords: ['react', 'componente', 'tailwind', 'angular', 'vue'],
    },
    {
      id: 11,
      image: '/assets/images/categories/components/Wicked Blocks.webp',
      title: 'Wicked Blocks',
      categories: ['componentes'],
      description:
        'Una colección de más de 120 componentes y bloques HTML para TailwindCSS totalmente responsivos.',
      link: 'https://wickedblocks.dev/',
      keywords: ['HTML', 'componente', 'tailwind'],
    },
    {
      id: 12,
      image: '/assets/images/categories/components/Headless UI.webp',
      title: 'Headless UI',
      categories: ['componentes'],
      description:
        'Componentes de interfaz de usuario completamente accesibles para React y Vue, diseñados para integrarse con Tailwind CSS.',
      link: 'https://headlessui.com/',
      keywords: ['react', 'componente', 'tailwind', 'vue'],
    },
    {
      id: 13,
      image: '/assets/images/categories/deploys/Vercel.webp',
      title: 'Vercel',
      categories: ['deploy', 'populares'],
      description:
        'Sube tus proyectos front-end y back-end, los proyectos se actualizan automáticamente al actualizar el repositorio Github enlazado.',
      link: 'https://vercel.com/',
      keywords: ['deploy', 'frontend', 'backend'],
    },
    {
      id: 14,
      image: '/assets/images/categories/deploys/Render.webp',
      title: 'Render',
      categories: ['deploy'],
      description:
        'Sube tus proyectos front-end y back-end, además puedes crear una base de datos gratuita por cuenta.',
      link: 'https://render.com/',
      keywords: ['deploy', 'frontend', 'backend'],
    },
    {
      id: 15,
      image: '/assets/images/categories/deploys/Netlify.webp',
      title: 'Netlify',
      categories: ['deploy'],
      description:
        'Sube tus proyectos front-end, solo arrastra la carpeta raíz de tu proyecto para hacer deploy de forma sencilla.',
      link: 'https://app.netlify.com/drop',
      keywords: ['deploy', 'frontend'],
    },
    {
      id: 16,
      image: '/assets/images/categories/deploys/Fl0.webp',
      title: 'Fl0',
      categories: ['deploy'],
      description:
        'Sube tus proyectos back-end, además puedes crear una base de datos gratuita por cuenta.',
      link: 'https://www.fl0.com/',
      keywords: ['deploy', 'backend'],
    },
    {
      id: 17,
      image: '/assets/images/categories/forms/Formik.webp',
      title: 'Formik',
      categories: ['formularios'],
      description:
        'Construye formularios basados en React eficaces, declarativos, intuitivos y adaptables.',
      link: 'https://formik.org/',
      keywords: ['form', 'react'],
    },
    {
      id: 18,
      image: '/assets/images/categories/forms/React Hook Form.webp',
      title: 'React Hook Form',
      categories: ['formularios', 'populares'],
      description:
        'Formularios basados en React eficaces, flexibles y extensibles con validación fácil de usar.',
      link: 'https://react-hook-form.com/',
      keywords: ['form', 'react'],
    },
    {
      id: 19,
      image: '/assets/images/categories/forms/Tally.webp',
      title: 'Tally',
      categories: ['formularios'],
      description:
        'Formularios adatables a cualquier entorno, flexibles y extensibles con validación.',
      link: 'https://tally.so/',
      keywords: ['form'],
    },
  ];
}
