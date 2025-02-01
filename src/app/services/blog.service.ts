import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/ipost.interface';
import { CATEGORIES, POSTS } from '../db/posts.db';
import { ICategory } from '../interfaces/icategory.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private posts: IPost[] = POSTS;
  private categories: ICategory[] = CATEGORIES;

  private nextPostId = 20;

  getAll(): IPost[] {
    return this.posts;
  }

  getCategories(): ICategory[] {
    return this.categories;
  }

  insert(post: IPost) {
    post.id = this.nextPostId;
    this.posts.push(post);
    this.nextPostId++;
  }
}
