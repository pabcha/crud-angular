import { Injectable } from '@angular/core';
import { Category } from './category';
import { CATEGORIES } from './mock-categories';

@Injectable()
export class CategoryService {

  constructor() {}

  storeCategory(category: string) {
    let size = CATEGORIES.length;

    CATEGORIES.push({
      id: size + 1,
      name: category
    });
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }

}
