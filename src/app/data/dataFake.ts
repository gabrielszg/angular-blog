export type CardData = {
  id: string;
  title: string;
  description: string,
  photoCover: string,
}

export const dataFake: CardData[] = [
  {
    id: '1',
    title: 'NOVO HOMEM DE FERRO EM 3D',
    description: 'Marvel Anuncia novo homem de ferro',
    photoCover:
      'https://wallpapercat.com/w/full/3/3/d/319908-1920x1080-desktop-1080p-iron-man-background.jpg',
  },
  {
    id: '2',
    title: 'Nova série anunciada no Disney +',
    description: 'Nova série no streaming da Disney',
    photoCover:
      'https://c4.wallpaperflare.com/wallpaper/596/549/187/avengers-hd-widescreen-wallpaper-preview.jpg',
  },
  {
    id: '3',
    title: 'Novo filme do pantera negra lançado em breve',
    description: 'Um novo filme do pantera negra!',
    photoCover:
      'https://rollingstone.com.br/media/uploads/pantera-negra-wakanda-forever-foto-divulgacao-marvel-studios.jpg',
  },
  {
    id: '4',
    title: 'Novo filme dos X-men está em pós produção, afirma diretor',
    description: 'Os X-men ressurgem!',
    photoCover:
      'https://c4.wallpaperflare.com/wallpaper/156/283/658/x-men-x-men-days-of-future-past-wolverine-magneto-wallpaper-preview.jpg',
  },
];
