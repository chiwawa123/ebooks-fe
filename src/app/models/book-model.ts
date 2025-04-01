import { BookInterface } from "../interfaces/book-interface";

export class BookModel implements BookInterface {
  book_id!: number;
  title!: string;
  author!: string;
  year!: number;
  description!: string;
  cover_image!: string;
}
