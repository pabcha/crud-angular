export enum STATUS {draft = 'Draft', published = 'Published'};

export interface Article {
  id: number;
  title: string;
  slug: string;
  body: string;
  category: number;
  author: string;
  status: STATUS;
  created: number;
}