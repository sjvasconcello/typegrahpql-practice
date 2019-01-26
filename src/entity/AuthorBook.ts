import { ObjectType } from "type-graphql";
import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Author } from "./Author";
import { Book } from "./Books";

@ObjectType()
@Entity()
export class AuthorBook extends BaseEntity {
  @PrimaryGeneratedColumn()
  authorId: string;

  @PrimaryGeneratedColumn()
  bookId: string;

  @ManyToOne(() => Author, author => author.bookConnection, { primary: true })
  @JoinColumn({ name: "authorId" })
  author: Promise<Author>;

  @ManyToOne(() => Book, book => book.authorConnection, {
    primary: true
  })
  @JoinColumn({ name: "bookId" })
  book: Promise<Book>;
}
