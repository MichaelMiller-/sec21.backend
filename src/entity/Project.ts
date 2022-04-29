import {Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { CrossSection } from "./CrossSection";
import { CurveMember } from "./CurveMember";
import { LoadCase } from "./LoadCase";
import { Material } from "./Material";
import { StructuralPoint } from "./StructuralPoint";

@Entity()
export class Project {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    title: string;

    @CreateDateColumn()
    createdAt: Date;

    @Column()
    modifiedAt: Date; // modified by database trigger

    @OneToMany(type => Material, material => material.project)
    materials: Material[];

    @OneToMany(type => StructuralPoint, structuralPoint => structuralPoint.project)
    structuralPoints: StructuralPoint[];

    @OneToMany(type => CrossSection, crossSection => crossSection.project)
    crossSections: CrossSection[];

    @OneToMany(type => LoadCase, loadCase => loadCase.project)
    loadCases: LoadCase[];

    @OneToMany(type => CurveMember, curveMember => curveMember.project)
    curveMembers: CurveMember[];
}
