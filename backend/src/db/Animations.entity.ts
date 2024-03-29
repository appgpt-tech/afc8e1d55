//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Animations")
export class AnimationsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Animation_ID: string;

@Column({nullable: true})
Animation_Name: string;

@Column({nullable: true})
Animation_Type: string;

@Column({nullable: true})
Duration: string;


}
