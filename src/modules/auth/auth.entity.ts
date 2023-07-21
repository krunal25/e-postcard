import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  username: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;
}
