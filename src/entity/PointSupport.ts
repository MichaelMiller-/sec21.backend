import { Entity, PrimaryGeneratedColumn, Column, Generated, JoinColumn, OneToOne } from "typeorm";
import { StructuralPoint } from "./StructuralPoint";

// todo: remove
export enum SupportType {
   FIXED = "Fixed",
   HINGED = "Hinged",
   SLIDING = "Sliding",
   CUSTOM = "Custom"
}

export enum SupportTranslation {
   RIGID = "Rigid",
   FREE = "Free",
   FLEXIBLE = "Flexible",
   COMPRESSION_ONLY = "CompressionOnly",
   TENSION__ONLY = "TensionOnly",
   //  "Flexible compression only",
   // "Flexible tension only",
   NON_LINEAR = "NonLinear"
}

export enum SupportRotationalStiffness {
   FREE = "Free",
   RIGID = "Rigid",
   FLEXIBLE = "Flexible",
   NON_LINEAR = "NonLinear"
}

@Entity()
export class PointSupport {

   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   @Generated("uuid")
   uuid: string;

   @Column()
   name: string;

   @OneToOne(type => StructuralPoint)
   @JoinColumn()
   referencePoint: StructuralPoint;

   // todo: remove
   @Column({
      type: "enum",
      enum: SupportType,
      default: SupportType.FIXED
   })
   type: SupportType;

   @Column({
      type: "enum",
      enum: SupportTranslation,
      default: SupportTranslation.FREE
   })
   ux: SupportTranslation;

   @Column({
      type: "enum",
      enum: SupportTranslation,
      default: SupportTranslation.FREE
   })
   uy: SupportTranslation;

   @Column({
      type: "enum",
      enum: SupportTranslation,
      default: SupportTranslation.FREE
   })
   uz: SupportTranslation;

   @Column({
      type: "enum",
      enum: SupportRotationalStiffness,
      default: SupportRotationalStiffness.FREE
   })
   fix: SupportRotationalStiffness;

   @Column({
      type: "enum",
      enum: SupportRotationalStiffness,
      default: SupportRotationalStiffness.FREE
   })
   fiy: SupportRotationalStiffness;

   @Column({
      type: "enum",
      enum: SupportRotationalStiffness,
      default: SupportRotationalStiffness.FREE
   })
   fiz: SupportRotationalStiffness;

   @Column("real")
   stiffnessX: number;

   @Column("real")
   stiffnessY: number;

   @Column("real")
   stiffnessZ: number;

   @Column("real")
   stiffnessFix: number;

   @Column("real")
   stiffnessFiy: number;

   @Column("real")
   stiffnessFiz: number;
}