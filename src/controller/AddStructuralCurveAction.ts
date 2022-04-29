import { Request, Response } from "express";
import { getManager } from "typeorm";
import Result from "../dto/Result";
import {LoadCase} from "../entity/LoadCase";
import {StructuralCurveAction} from "../entity/StructuralCurveAction";
import {CurveMember} from "../entity/CurveMember";

export async function addStructuralCurveAction(request: Request, response: Response) {

    let result = new Result<null>();

    const lc = await getManager().getRepository(LoadCase).findOne(request.params.lc);
    const member = await getManager().getRepository(CurveMember).findOne(request.params.member);

    let obj = new StructuralCurveAction();
    obj.name = request.body.name;
    obj.loadCase = lc;
    obj.curveMember = member;
    obj.value1 = request.body.value1;
    obj.value2 = request.body.value2;

    getManager().getRepository(StructuralCurveAction)
        .save(obj)
        .then(() => {
            result.success = true;
            result.message = "";
        })
        .catch(ex => {
            console.log(ex)
            result.success = false;
            result.message = ex.detail;
        });

    response.send(result);
}
