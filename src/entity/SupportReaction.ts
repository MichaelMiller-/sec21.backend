import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { StructuralPoint } from "./StructuralPoint";
import {LoadCase} from "./LoadCase";
import {PointSupport} from "./PointSupport";

@Entity()
export class SupportReaction {

   @PrimaryGeneratedColumn()
   id: number;

   @Column("real") // [kN]
   Px: number = 0;

   @Column("real") // [kN]
   Py: number = 0;

   @Column("real") // [kN]
   Pz: number = 0;

   @Column("real") // [kNm]
   Mx: number = 0;

   @Column("real") // [kNm]
   My: number = 0;

   @Column("real") // [kNm]
   Mz: number = 0;

   @OneToOne(type => StructuralPoint)
   @JoinColumn()
   referencePoint: PointSupport;

   @ManyToOne(type => LoadCase, obj => obj.id)
   loadCase: LoadCase;
}
