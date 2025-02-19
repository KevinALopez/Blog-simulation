import { ICategory } from '../interfaces/icategory.interface';
import { IPost } from '../interfaces/ipost.interface';

export const POSTS: IPost[] = [
  {
    id: 1,
    title: 'Amanecer en la playa',
    body: 'Disfruté de un amanecer espectacular en la costa, con el sonido de las olas y la brisa marina.',
    author: 'Carlos Méndez',
    img: 'https://picsum.photos/id/343/200/300',
    date: '2024-02-01',
    category: { id: 1, name: 'playa' },
  },
  {
    id: 2,
    title: 'Excursión a la cima',
    body: 'Una caminata desafiante pero gratificante en las montañas. La vista desde la cima fue impresionante.',
    author: 'Lucía Fernández',
    img: 'https://picsum.photos/id/596/200/300',
    date: '2024-01-15',
    category: { id: 2, name: 'montaña' },
  },
  {
    id: 3,
    title: 'Descubriendo Barcelona',
    body: 'Un recorrido por las maravillas arquitectónicas y la cultura vibrante de la ciudad condal.',
    author: 'Andrés López',
    img: 'https://picsum.photos/id/927/200/300',
    date: '2023-12-20',
    category: { id: 3, name: 'ciudad' },
  },
  {
    id: 4,
    title: 'Vida tranquila en el campo',
    body: 'Pasé una semana en una granja rural, disfrutando del aire puro y la tranquilidad.',
    author: 'Mariana Torres',
    img: 'https://picsum.photos/id/586/200/300',
    date: '2023-11-10',
    category: { id: 4, name: 'rural' },
  },
  {
    id: 5,
    title: 'Rock en vivo en Madrid',
    body: 'Asistí a un festival de rock increíble en la capital. La energía del público fue impresionante.',
    author: 'Diego Ramírez',
    img: 'https://picsum.photos/id/330/200/300',
    date: '2023-10-05',
    category: { id: 5, name: 'festivales' },
  },
  {
    id: 6,
    title: 'Día de snorkel',
    body: 'Exploré los arrecifes de coral en aguas cristalinas. Una experiencia inolvidable.',
    author: 'Paula Gómez',
    img: 'https://picsum.photos/id/370/200/300',
    date: '2023-09-12',
    category: { id: 1, name: 'playa' },
  },
  {
    id: 7,
    title: 'Senderismo en los Pirineos',
    body: 'Paisajes impresionantes y aire puro en una aventura de tres días en la montaña.',
    author: 'Fernando Ruiz',
    img: 'https://picsum.photos/id/851/200/300',
    date: '2023-08-08',
    category: { id: 2, name: 'montaña' },
  },
  {
    id: 8,
    title: 'Paseo por Sevilla',
    body: 'Recorrí la Plaza de España y la Giralda, disfrutando del encanto andaluz.',
    author: 'Isabel Martínez',
    img: 'https://picsum.photos/id/78/200/300',
    date: '2023-07-30',
    category: { id: 3, name: 'ciudad' },
  },
  {
    id: 9,
    title: 'Vida en un viñedo',
    body: 'Aprendí sobre la producción del vino en un hermoso pueblo rural.',
    author: 'Juan Navarro',
    img: 'https://picsum.photos/id/450/200/300',
    date: '2023-06-18',
    category: { id: 4, name: 'rural' },
  },
  {
    id: 10,
    title: 'Festival de jazz en Bilbao',
    body: 'Música en vivo con artistas increíbles en un ambiente inigualable.',
    author: 'Elena Castro',
    img: 'https://picsum.photos/id/495/200/300',
    date: '2023-05-22',
    category: { id: 5, name: 'festivales' },
  },
  {
    id: 11,
    title: 'Surf en Tarifa',
    body: 'Olas perfectas y un clima ideal para surfear en la costa sur.',
    author: 'Miguel Herrera',
    img: 'https://picsum.photos/id/485/200/300',
    date: '2023-04-15',
    category: { id: 1, name: 'playa' },
  },
  {
    id: 12,
    title: 'Escalada en roca',
    body: 'Superé mis miedos escalando una pared de roca natural en los Alpes.',
    author: 'Sofía Peña',
    img: 'https://picsum.photos/id/802/200/300',
    date: '2023-03-10',
    category: { id: 2, name: 'montaña' },
  },
  {
    id: 13,
    title: 'Ruta gastronómica en Valencia',
    body: 'Degusté la mejor paella y otros platos tradicionales en la ciudad.',
    author: 'Javier Ortega',
    img: 'https://picsum.photos/id/760/200/300',
    date: '2023-02-05',
    category: { id: 3, name: 'ciudad' },
  },
  {
    id: 14,
    title: 'Recogida de aceitunas',
    body: 'Viví la experiencia de cosechar aceitunas en un campo andaluz.',
    author: 'Teresa Molina',
    img: 'https://picsum.photos/id/13/200/300',
    date: '2022-12-20',
    category: { id: 4, name: 'rural' },
  },
  {
    id: 15,
    title: 'Festival de cine en San Sebastián',
    body: 'Asistí a la premier de varias películas en un evento de clase mundial.',
    author: 'Alberto Vázquez',
    img: 'https://picsum.photos/id/905/200/300',
    date: '2022-11-10',
    category: { id: 5, name: 'festivales' },
  },
  {
    id: 16,
    title: 'Buceo nocturno',
    body: 'Una aventura única explorando la fauna marina bajo la luz de la luna.',
    author: 'Natalia Suárez',
    img: 'https://picsum.photos/id/354/200/300',
    date: '2022-10-01',
    category: { id: 1, name: 'playa' },
  },
  {
    id: 17,
    title: 'Fotografía en los Andes',
    body: 'Capturé imágenes espectaculares de la fauna y los paisajes montañosos.',
    author: 'Ricardo Gómez',
    img: 'https://picsum.photos/id/512/200/300',
    date: '2022-09-15',
    category: { id: 2, name: 'montaña' },
  },
  {
    id: 18,
    title: 'Tour en bicicleta por Madrid',
    body: 'Descubrí los rincones escondidos de la capital sobre dos ruedas.',
    author: 'Marcos Sánchez',
    img: 'https://picsum.photos/id/6/200/300',
    date: '2022-08-12',
    category: { id: 3, name: 'ciudad' },
  },
  {
    id: 19,
    title: 'Cabañas en los Pirineos',
    body: 'Pasé un fin de semana desconectado del mundo en una cabaña de madera.',
    author: 'Beatriz Navas',
    img: 'https://picsum.photos/id/415/200/300',
    date: '2022-07-07',
    category: { id: 4, name: 'rural' },
  },
  {
    id: 20,
    title: 'Música electrónica en Ibiza',
    body: 'Viví la mejor fiesta de mi vida en un festival con DJ internacionales.',
    author: 'Daniel Pardo',
    img: 'https://picsum.photos/id/776/200/300',
    date: '2022-06-20',
    category: { id: 5, name: 'festivales' },
  },
];

export const CATEGORIES: ICategory[] = [
  { id: 1, name: 'playa' },
  { id: 2, name: 'montaña' },
  { id: 3, name: 'ciudad' },
  { id: 4, name: 'rural' },
  { id: 5, name: 'festivales' },
];
