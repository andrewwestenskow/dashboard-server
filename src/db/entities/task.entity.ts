import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DueRange, Frequency } from '../../common/constants';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar', { length: 255, nullable: false })
  name: string;

  @Column('text', { nullable: true })
  description: string;

  @Column({ type: 'enum', enum: Frequency, nullable: false })
  frequency: string;

  /**
   * DAILIY: Always 0
   * WEEKLY: 0 - 6 Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday
   * MONTHLY: 0 - 31 Day of the month
   * YEARLY: 0 - 365 Day of the year
   */
  @Column('int', { nullable: false })
  frequencyId: number;

  /**
   * SAME_DAY: 0
   * WEEK: Next 6 days
   * MONTH: Next 31 Days
   * YEAR: Until 365
   */
  @Column({ type: 'enum', enum: DueRange, nullable: false })
  dueRange: number;

  @Column({ type: 'date', default: () => 'CURRENT_TIMESTAMP', nullable: false })
  startOn: string;

  @Column({ type: 'date', nullable: true })
  expires: string;
}
