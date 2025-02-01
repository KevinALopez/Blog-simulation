import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostCardComponent } from './post-card/post-card.component';
import { BlogService } from '../../services/blog.service';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { TitleFilterComponent } from './title-filter/title-filter.component';

@Component({
  selector: 'app-blog',
  imports: [PostCardComponent, CategoryFilterComponent, TitleFilterComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  postsList: IPost[] = [];

  private currentCategory: string = '';
  private currentTitle: string = '';

  blogService = inject(BlogService);

  ngOnInit() {
    this.postsList = this.blogService.getAll();
  }

  filterPostsByCategory(category: string) {
    this.currentCategory = category;

    if (this.currentCategory === '' && this.currentTitle === '') {
      this.postsList = this.blogService.getAll();
      return;
    }

    if (this.currentTitle === '') {
      this.postsList = this.blogService.getByCategory(category);
      return;
    }

    this.filterByCategoryAndTitle();
  }

  filterPostsByTitle(title: string) {
    this.currentTitle = title;

    if (this.currentCategory === '' && this.currentTitle === '') {
      this.postsList = this.blogService.getAll();
      return;
    }

    if (this.currentCategory === '') {
      this.postsList = this.blogService
        .getAll()
        .filter((post) =>
          post.title.toLowerCase().includes(title.toLowerCase())
        );
      return;
    }

    this.filterByCategoryAndTitle();
  }

  filterByCategoryAndTitle() {
    this.postsList =
      this.currentCategory === ''
        ? this.blogService
            .getAll()
            .filter((post) =>
              post.title.toLowerCase().includes(this.currentTitle.toLowerCase())
            )
        : this.blogService
            .getAll()
            .filter((post) => post.category.name === this.currentCategory)
            .filter((post) =>
              post.title.toLowerCase().includes(this.currentTitle.toLowerCase())
            );
  }
}
