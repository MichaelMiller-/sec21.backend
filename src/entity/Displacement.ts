import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { StructuralPoint } from "./StructuralPoint";
import {LoadCase} from "./LoadCase";

@Entity()
export class Displacement {

   @PrimaryGeneratedColumn()
   id: number;

   @Column("real")
   delta_x: number = 0;

   @Column("real")
   delta_y: number = 0;

   @Column("real")
   delta_z: number = 0;

   @OneToOne(type => StructuralPoint)
   @JoinColumn()
   node: StructuralPoint;

   @ManyToOne(type => LoadCase, obj => obj.id)
   loadCase: LoadCase;
}
