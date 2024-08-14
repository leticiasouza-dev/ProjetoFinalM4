import { getAllMedico, getMedicoById, createNewMedico, deleteMedicoById, updateMedicoById } from "../controller/medico.controller.js";
import { Router } from "express";

const medicoRouter = Router();

medicoRouter.get('/medico/all', getAllMedico);
medicoRouter.get('/medico/id', getMedicoById);

medicoRouter.post('medico/new', createNewMedico);

medicoRouter.delete('medico/delete/:id', deleteMedicoById);

medicoRouter.put('medico/update/:id', updateMedicoById);

export {medicoRouter}