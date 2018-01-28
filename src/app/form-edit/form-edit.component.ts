import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../shared/article.service';
import { CategoryService } from '../shared/category.service';
import { Article, STATUS } from '../shared/article';
import { Category } from '../shared/category';
import { CATEGORIES } from '../shared/mock-categories';
import { Router } from '@angular/router';
import { NewCategoryDialogComponent } from '../new-category-dialog/new-category-dialog.component';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  categories: Category[];
  statuses: string[] = [STATUS.draft, STATUS.published];
  article: Article;
  articleId: number;

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private categoryService: CategoryService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getArticle();
    this.categories = this.categoryService.getCategories();
  }

  getArticle() {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articleService.getArticle(this.articleId);
  }

  onSubmit(value) {
    this.articleService.updateArticle(this.articleId, value);
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
