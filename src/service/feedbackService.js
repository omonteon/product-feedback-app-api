import { listAll, listById } from "../dao/feedbackDao.js";

async function listAllUseCase() {
  let response;
  try {
    response = await listAll();
  } catch (e) {
    console.log(e);
  }
  return response;
}

async function listByIdUseCase(id) {
  let response;
  try {
    response = await listById(id);
  } catch (e) {
    console.log(e);
  }
  return response;
}

export { listAllUseCase, listByIdUseCase };
