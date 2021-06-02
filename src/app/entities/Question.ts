import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Exam } from './Exam';

@Entity('questions')
class Question {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  expiration_time: number;

  @Column()
  exam_id: string;

  @JoinColumn({name: "exam_id"})
  @ManyToOne(() => Exam)
  exam: Exam;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

};

export { Question };
