import {Entity, PrimaryGeneratedColumn, Column, Generated, JoinColumn, OneToOne, ManyToOne} from "typeorm";
import { LoadCase } from "./LoadCase";
import {CurveMember} from "./CurveMember";
import {StructuralPoint} from "./StructuralPoint";

export enum Direction {
    X = "x",
    Y = "y",
    Z = "z",
    Vector = "vector"
}

export enum CoordinateSystem {
    GLOBAL = "global",
    LOCAL = "local"
}

@Entity()
export class StructuralCurveAction {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column({
        type: "enum",
        enum: Direction,
        default: Direction.X
    })
    direction: Direction;

    @Column("real")
    value1: number; // [kN/m]

    @Column("real")
    value2: number; // [kN/m]

    @ManyToOne(type => CurveMember, e => e.id)
    curveMember: CurveMember;

    @ManyToOne(type => LoadCase, e => e.id)
    loadCase: LoadCase;

    @Column({
        type: "enum",
        enum: CoordinateSystem,
        default: CoordinateSystem.GLOBAL
    })
    coordinateSystem: CoordinateSystem;
}
