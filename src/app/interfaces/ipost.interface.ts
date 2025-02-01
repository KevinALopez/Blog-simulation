import { ICategory } from './icategory.interface';

export interface IPost {
  id: number;
  title: string;
  body: string;
  author: string;
  img: string;
  date: string;
  category: ICategory;
}
