import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Postcard {
  @PrimaryGeneratedColumn()
  postcardId: number;

  @Column({
    type: 'text',
    nullable: false,
    name: 'recipientName',
  })
  recipientName: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'street1',
  })
  street1: string;

  @Column({
    type: 'text',
    nullable: true,
    name: 'street2',
  })
  street2: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'state',
  })
  state: string;

  @Column({
    type: 'text',
    nullable: false,
    name: 'city',
  })
  city: string;

  @Column({
    type: 'int',
    nullable: false,
    name: 'zipCode',
  })
  zipCode: number;

  @Column({
    type: 'text',
    nullable: false,
    name: 'message',
  })
  message: string;
}
