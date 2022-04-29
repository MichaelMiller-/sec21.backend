import { Request, Response } from "express";
import { getManager } from "typeorm";
import {StructuralCurveAction} from "../entity/StructuralCurveAction";

export async function listStructuralCurveAction(request: Request, response: Response) {

    const values = await getManager()
        .getRepository(StructuralCurveAction)
        .createQueryBuilder("obj")
        .leftJoinAndSelect('obj.curveMember', 'notused1')
        .leftJoinAndSelect('obj.loadCase', 'lc')
        .where("lc.project = :id", { id: request.params.id })
        .getMany();

    response.send(values);
}