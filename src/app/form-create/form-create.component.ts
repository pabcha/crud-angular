import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Location } from '@angular/common';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/mock-categories';
import { Router } from '@angular/router';
import { ArticleService } from '../shared/article.service';
import { CategoryService } from '../shared/category.service';
import { STATUS } from '../shared/article';
import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.css']
})
export class FormCreateComponent implements OnInit {

  categories: Category[];
  statuses: string[] = [STATUS.draft, STATUS.published];

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private location: Location) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  onSubmit(value) {
    this.articleService.storeArticle(value);
    this.router.navigateByUrl('/articles');
  }

  btnAddCategory() {
    const dialogRef = this.dialog.open(NewCategoryDialogComponent, {width: '540px'});  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addCategory(result);
      }
    });
  }

  addCategory(value: string) {
    this.categoryService.storeCategory(value);
  }

}
