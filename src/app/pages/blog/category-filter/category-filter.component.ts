import { Component, EventEmitter, inject, Output } from '@angular/core';
import { BlogService } from '../../../services/blog.service';
import { ICategory } from '../../../interfaces/icategory.interface';

@Component({
  selector: 'app-category-filter',
  imports: [],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
})
export class CategoryFilterComponent {
  @Output() selectCategory: EventEmitter<string> = new EventEmitter();
  categories: ICategory[] = [];

  blogsService = inject(BlogService);

  ngOnInit() {
    this.categories = this.blogsService.getCategories();
  }

  onChange(event: any) {
    this.selectCategory.emit(event.target.value);
  }
}
