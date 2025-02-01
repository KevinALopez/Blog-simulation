import { Component, inject } from '@angular/core';
import { IPost } from '../../interfaces/ipost.interface';
import { PostCardComponent } from './post-card/post-card.component';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  imports: [PostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  postsList: IPost[] = [];

  blogsSercive = inject(BlogService);

  ngOnInit() {
    this.postsList = this.blogsSercive.getAll();
  }
}
