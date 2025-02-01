import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostCardComponent } from './post-card/post-card.component';
import { BlogService } from '../../services/blog.service';
import { CategoryFilterComponent } from './category-filter/category-filter.component';

@Component({
  selector: 'app-blog',
  imports: [PostCardComponent, CategoryFilterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  postsList: IPost[] = [];

  blogService = inject(BlogService);

  ngOnInit() {
    this.postsList = this.blogService.getAll();
  }

  filterPosts(category: string) {
    if (category === '') {
      this.postsList = this.blogService.getAll();
      return;
    }

    this.postsList = this.blogService.getByCategory(category);
  }
}
