import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

import { Question } from './Question';

@Entity('alternatives')
class Alternative {

  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  text: string;

  @Column()
  right_answer: boolean;

  @Column()
  question_id: string;

  @JoinColumn({name: "question_id"})
  @ManyToOne(() => Question)
  question: Question;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

};

export { Alternative };
