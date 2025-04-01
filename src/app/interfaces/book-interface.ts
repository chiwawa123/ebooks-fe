
export type BookList = BookInterface[];

export interface BookInterface {
  book_id: number;
  title: string;
  author: string;
  year: number;
  description: string;
  cover_image: string;
}
