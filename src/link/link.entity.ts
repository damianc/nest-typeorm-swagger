import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ILink } from './link.interface';

@Entity('link')
export class LinkEntity {

  constructor(readonly payload?: ILink) {
    if (payload) {
      this.url = payload.url;
      this.title = payload.title;
      this.category = payload.category;
    }
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column()
  title: string;

  @Column()
  category: string;

}