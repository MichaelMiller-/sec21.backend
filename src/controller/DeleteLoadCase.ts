import {Request, Response} from "express";
import {getManager} from "typeorm";
import Result from "../dto/Result";
import logger from "../logging/Logger";
import {LoadCase} from "../entity/LoadCase";

export async function deleteLoadCase(request: Request, response: Response) {

    let result = new Result<null>();

    await getManager().getRepository(LoadCase)
        .delete(request.params.id)
        .catch((ex) => {
            logger.error(ex);
            result.success = false
            result.message = ex.detail
        });

    response.send(result);
}
