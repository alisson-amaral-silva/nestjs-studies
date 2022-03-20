import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
  getAll(): string {
    return 'Book List';
  }

  getById(id: number): string {
    return `Book ${id}`;
  }

  update(book: Book): string {
    return `Book ${book} updated`;
  }

  create(book: Book): string {
    return `Book ${book} created`;
  }

  delete(id: number): string {
    return `Book ${id} deleted`;
  }
}
