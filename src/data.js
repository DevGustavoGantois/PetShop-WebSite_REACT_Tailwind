// import hero slider images
import HeroSlideImage1 from './assets/img/dogs/dog-slide-1.png';
import HeroSlideImage2 from './assets/img/dogs/dog-slide-2.png';
import HeroSlideImage3 from './assets/img/dogs/dog-slide-3.png';
// import dog category images
import DogCateg1 from './assets/img/dogs/dog-categ-1.png';
import DogCateg2 from './assets/img/dogs/dog-categ-2.png';
import DogCateg3 from './assets/img/dogs/dog-categ-3.png';
import DogCateg4 from './assets/img/dogs/dog-categ-4.png';
// import social icons
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

export const navigation = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Preços',
    href: '#Preços',
  },
  {
    name: 'Contato',
    href: '#Contato',
  },
  {
    name: 'Marque uma consulta',
    href: '#marqueconsulta',
  },
];

export const heroSlider = [
  {
    id: 1,
    title: 'Nós cuidamos do seu animal de estimação.',
    image: HeroSlideImage1,
    subtitle:
      'Com amor e dedicação, garantindo o bem-estar do seu melhor amigo.',
    buttonText: 'Marque uma consulta',
  },
  {
    id: 2,
    title: 'O maior amor que podemos oferecer.',
    image: HeroSlideImage2,
    subtitle:
      'Nós cuidamos do seu animal de estimação. O maior amor que podemos oferecer.',
    buttonText: 'Marque uma consulta',
  },
  {
    id: 3,
    title: 'A necessidade do seu pet é a nossa necessidade.',
    image: HeroSlideImage3,
    subtitle:
      'Cuidado personalizado e carinho incondicional para seu companheiro.',
    buttonText: 'Marque uma consulta',
  },
];

export const bundleData = [
  {
    id: 1,
    image: DogCateg1,
    name: 'Pequeno',
    dogCategory: '1 - 9 kg',
    services: [
      {
        name: 'smart',
        price: 20,
        list: ['Banho', 'limpeza de ouvidos', 'corte de unhas', 'perfume'],
      },
      {
        name: 'premium',
        price: 40,
        list: [
          'Todos os serviços inteligentes',
          'Perfume Premium',
          'Banho Premium',
          'Tosa Premium',
          'Acessórios Premium',
        ],
      },
      {
        name: 'royal',
        price: 60,
        list: [
          'Todos os serviços inteligentes',
          'Perfume Royal',
          'Banho Royal',
          'Tosa Royal',
          'Acessórios Royal',
          'Passeio Semanal',
          'Brinquedos novos Semanais',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Médio',
    image: DogCateg2,
    dogCategory: '10 - 19 kg',
    services: [
      {
        name: 'smart',
        price: 80,
        list: ['Banho', 'limpeza de ouvidos', 'corte de unhas', 'perfume'],
      },
      {
        name: 'premium',
        price: 100,
        list: [
          'Todos os Serviços inteligentes',
          'Perfume Premium',
          'Banho Premium',
          'Tosa Premium',
          'Acessórios Premium',
        ],
      },
      {
        name: 'royal',
        price: 120,
        list: [
          'Todos os serviços inteligentes',
          'Perfume Royal',
          'Banho Royal',
          'Tosa Royal',
          'Acessórios Royal',
          'Passeio Semanal',
          'Brinquedos novos Semanais',
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Grande',
    image: DogCateg3,
    dogCategory: '20 - 29 kg',
    services: [
      {
        name: 'smart',
        price: 140,
        list: ['Banho', 'limpeza de ouvidos', 'corte de unhas', 'perfume'],
      },
      {
        name: 'premium',
        price: 160,
        list: [
          'Todos os serviços inteligentes',
          'Perfume Premium',
          'Banho Premium',
          'Tosa Premium',
          'Acessórios Premium',
        ],
      },
      {
        name: 'royal',
        price: 180,
        list: [
          'Todos os serviços inteligentes',
          'Perfume Royal',
          'Banho Royal',
          'Tosa Royal',
          'Acessórios Royal',
          'Passeio Semanal',
          'Brinquedos novos Semanais',
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Super Grande',
    image: DogCateg4,
    dogCategory: '30 - 39 kg',
    services: [
      {
        name: 'smart',
        price: 200,
        list: ['Banho', 'limpeza de ouvidos', 'corte de unhas', 'perfume'],
      },
      {
        name: 'premium',
        price: 210,
        list: [
          'Todos os Serviços Inteligentes',
          'Perfume Premium',
          'Banho Premium',
          'Tosa Premium',
          'Acessórios Premium',
        ],
      },
      {
        name: 'royal',
        price: 220,
        list: [
          'Todos os Serviços inteligentes',
          'Perfume Royal',
          'Banho Royal',
          'Tosa Royal',
          'Acessórios Royal',
          'Passeio Semanal',
          'Brinquedos novos Semanais',
        ],
      },
    ],
  },
];

export const social = [
  {
    icon: AiFillYoutube,
    href: '#',
  },
  {
    icon: AiFillInstagram,
    href: '#',
  },
  {
    icon: AiFillGithub,
    href: '#',
  },
];
