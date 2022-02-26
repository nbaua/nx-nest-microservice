import { Logger } from '@nestjs/common';
import {
  BeforeInsert,
  BeforeRemove,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('post')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ name: 'slug' })
  @Generated('uuid')
  slug: string;
  @Column({ name: 'title', default: '', length: 250 })
  title: string;
  @Column({ name: 'content', default: '', length: 4000 })
  content: string;
  @Column({ name: 'likes', default: 0 })
  likes: number;
  //additional goodies
  @CreateDateColumn()
  createdDate: Date;
  @UpdateDateColumn()
  updatedDate: Date;
  @DeleteDateColumn()
  deletedDate: Date;
  //auto trigger
  @BeforeInsert()
  updateDates() {
    Logger.log('Inserting New post', 'Data-Lib:Post');
    this.createdDate = new Date();
  }
  @BeforeRemove() // works with hard delete
  updateLikes() {
    Logger.log(
      'Removing post#' +
        this.id +
        ' & Cleaning up likes from ' +
        this.likes +
        ' zero',
      'Data-Lib:Post'
    );
    this.likes = 0;
  }
}
