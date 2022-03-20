import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { Book } from './book.model';
import { BooksService } from './books.service';


@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  async getAll(): Promise<Book[]> {
    return await this.bookService.getAll();
  }

  @Get(':id')
  async getById(@Param() params): Promise<Book> {
    return await this.bookService.getById(params.id);
  }

  @Post()
  async create(@Body() book) {
    return await this.bookService.create(book);
  }

  @Put()
  async update(@Body() book): Promise<[number, Book[]]> {
    return await this.bookService.update(book);
  }

  @Delete(':id')
  async delete(@Param() params) {
    return await this.bookService.delete(params.id);
  }
}
