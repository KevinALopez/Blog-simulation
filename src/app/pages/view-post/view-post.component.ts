import { Component, inject, Input } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { BlogService } from '../../services/blog.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-post',
  imports: [RouterLink],
  templateUrl: './view-post.component.html',
  styleUrl: './view-post.component.css',
})
export class ViewPostComponent {
  @Input() id: string = '';
  post: IPost | undefined;
  blogService = inject(BlogService);

  ngOnInit() {
    this.post = this.blogService.getById(Number(this.id));
  }
}
