import { getAllPaciente,createNewPaciente,deletePacienteById,updatePacientesById } from "../controller/paciente.controller.js";
import { Router } from "express";

const pacienteRouter = Router();

pacienteRouter.get("/paciente/all", getAllPaciente);

pacienteRouter.post("/paciente/new", createNewPaciente);

pacienteRouter.delete("/paciente/delete/:id", deletePacienteById);

pacienteRouter.put("/user/update/:id", updatePacientesById);

export { pacienteRouter };