import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable()
export class ArticleService {

  idGen: number = ARTICLES.length;

  constructor() {}

  getArticles(): Article[] {
    return ARTICLES;
  }

  getArticle(id: number): Article {
    const index = this._findIndexById(id);
    return ARTICLES[index];
  }

  storeArticle(newArticle: any) {
    this.idGen++;

    ARTICLES.push({
      id: this.idGen,
      title: newArticle.title,
      slug: newArticle.slug,
      body: newArticle.body,
      category: newArticle.category,
      author: newArticle.author,
      status: newArticle.status,
      created: Date.now()
    });
  }

  updateArticle(id: number, newArticle: any) {
    let art = ARTICLES[this._findIndexById(id)];

    art.title = newArticle.title;
    art.slug = newArticle.slug;
    art.body = newArticle.body;
    art.category = newArticle.category;
    art.status = newArticle.status;
  }

  deleteArticle(obj: Article) {
    const index = ARTICLES.indexOf(obj);
    ARTICLES.splice(index , 1);
  }

  private _findIndexById(id: number): number {
    return ARTICLES.findIndex(function (element) {
      return element.id === id;
    });
  }

}
