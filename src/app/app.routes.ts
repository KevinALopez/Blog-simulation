import { Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { ViewPostComponent } from './pages/view-post/view-post.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'post/:id',
    component: ViewPostComponent,
  },
  {
    path: 'new-post',
    component: NewPostComponent,
  },
  {
    path: '**',
    redirectTo: 'blog',
  },
];
