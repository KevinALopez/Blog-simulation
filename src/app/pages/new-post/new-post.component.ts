import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ICategory } from '../../interfaces/icategory.interface';
import { BlogService } from '../../services/blog.service';
import { IPost } from '../../interfaces/ipost.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  imports: [ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css',
})
export class NewPostComponent {
  formModel: FormGroup;

  categories: ICategory[] = [];

  blogService = inject(BlogService);
  router = inject(Router);

  constructor() {
    this.formModel = new FormGroup(
      {
        title: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        body: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        author: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        img: new FormControl(
          'https://picsum.photos/id/{Escoge un número de 0 a 1000}/200/300',
          [
            Validators.required,
            Validators.pattern(
              /^https:\/\/picsum\.photos\/id\/([0-9]{1,3}|1000)\/200\/300$/
            ), // URL pattern for images
          ]
        ),
        category: new FormControl('', [Validators.required]),
      },
      []
    );
  }

  ngOnInit() {
    this.categories = this.blogService.getCategories();
  }

  checkErrorField(field: string, error: string): boolean {
    if (
      this.formModel.get(field)?.hasError(error) &&
      this.formModel.get(field)?.touched
    ) {
      return true;
    }
    return false;
  }

  onSubmit() {
    const completeCategory = this.blogService.getCategoryByName(
      this.formModel.value.category
    );

    const date = new Date().toISOString().split('T')[0];

    //Object destructuring to create the post with the missing/updated fields before sending the request to the service.
    const post: IPost = {
      ...this.formModel.value,
      date,
      category: completeCategory as ICategory,
    };

    const newPostId = this.blogService.insert(post);
    this.router.navigateByUrl('/post/' + newPostId);
  }
}
