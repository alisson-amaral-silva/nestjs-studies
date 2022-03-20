import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { Product } from './product.model';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(): string {
    return 'Products List';
  }

  @Get(':id')
  getById(@Param() params): string {
    return `Return product ${params.id} data`;
  }

  @Post()
  create(@Body() product): string {
    return `Product ${product} created`;
  }

  @Put()
  update(@Body() product): string {
    return `Product ${product} created`;
  }

  @Delete(':id')
  delete(@Param() params): string {
    return `Product ${params.id} deleted`;
  }
}
