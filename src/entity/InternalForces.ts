import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import {LoadCase} from "./LoadCase";
import {CurveMember} from "./CurveMember";

@Entity()
export class InternalForces {

   @PrimaryGeneratedColumn()
   id: number;

   @Column("real") // [N]
   N: number = 0;

   @OneToOne(type => CurveMember)
   @JoinColumn()
   curveMember: CurveMember;

   @ManyToOne(type => LoadCase, obj => obj.id)
   loadCase: LoadCase;
}
