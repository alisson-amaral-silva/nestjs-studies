import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { BooksService } from './books.service';


@Controller('books')
export class BooksController {
  constructor(private bookService: BooksService) {}

  @Get()
  getAll(): string {
    return this.bookService.getAll();
  }

  @Get(':id')
  getById(@Param() params): string {
    return this.bookService.getById(params.id);
  }

  @Post()
  create(@Body() book): string {
    return this.bookService.create(book);
  }

  @Put()
  update(@Body() book): string {
    return this.bookService.update(book);
  }

  @Delete(':id')
  delete(@Param() params): string {
    return this.bookService.delete(params.id);
  }
}
