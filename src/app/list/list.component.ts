import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { Article } from '../shared/article';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { ArticleService } from '../shared/article.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  displayedColumns = ['title', 'slug', 'author', 'created', 'status', 'actions'];
  dataSource: MatTableDataSource<Article>;

  constructor(
    public dialog: MatDialog,
    private articleService: ArticleService,
    public snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Article>(this.getData());
  }

  getData() {
    return this.articleService.getArticles();
  }

  applyFilter(value: string) {
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  confirm(obj: Article) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '540px',
      data: { title: obj.title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(obj);
      }
    });
  }

  delete(obj: Article) {
    this.articleService.deleteArticle(obj);
    this.dataSource._updateChangeSubscription();
    this.snackBar.open('Article deleted', 'dismiss', {
      duration: 2000,
    });
  }

}