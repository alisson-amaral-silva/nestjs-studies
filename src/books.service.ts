import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BooksService {
  constructor(@InjectModel(Book) private bookModel: typeof Book) {}

  async getAll(): Promise<Book[]> {
    return await this.bookModel.findAll();
  }

  async getById(id: number): Promise<Book> {
    return await this.bookModel.findByPk(id);
  }

  async update(book: Book): Promise<[number, Book[]]> {
    return await this.bookModel.update(book, {
      where: {
        id: book.id,
      },
    });
  }

  async create(book: Book) {
    await this.bookModel.create(book);
  }

  async delete(id: number) {
    const book: Book = await this.getById(id);
    book.destroy();
  }
}
