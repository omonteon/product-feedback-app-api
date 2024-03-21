import { listAll } from "../dao/feedbackDao.js";

async function listAllUseCase() {
    
    let response
    try{
        response = await listAll();
    } catch(e){
        console.log(e)
    }
    return response;
}

export {listAllUseCase}