import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('estimations')
export class EstimationEntity {
  @PrimaryColumn()
  user: string;

  @Column({ nullable: false })
  estimation: string;
}
