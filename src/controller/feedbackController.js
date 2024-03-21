import { listAllUseCase } from "../service/feedbackService.js";

async function listAllEndpoint(req, res){
    let result
    try{
        result = await listAllUseCase();
    } catch(e){
        console.log(e)
        res.send({error: e}).status(500);
        return;
    }
    res.send(result).status(200);
}

export {listAllEndpoint}