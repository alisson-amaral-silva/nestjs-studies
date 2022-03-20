import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Book } from './book.model';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: 'book_store',
      autoLoadModels: true, //* recognize our project models
      synchronize: true, //* if there is no book table, it'll be created
    }),
    SequelizeModule.forFeature([Book]),
  ],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
