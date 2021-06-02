import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuid} from 'uuid';

import { Exam } from './Exam';

@Entity('answers')
class Answer {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  exam_id: string;

  @JoinColumn({name: "exam_id"})
  @ManyToOne(() => Exam)
  exam: Exam;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid();
    }
  }

};

export { Answer };
