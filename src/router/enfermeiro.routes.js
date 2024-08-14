import { getAllEnfermeiros, createNewEnfermeiro, deleteEnfermeiroById, updateEnfermeiroById } from "../controller/enfermeiro.controller.js";
import { Router } from "express";

const enfermeiroRouter = Router();

enfermeiroRouter.get("/enfermeiro/all", getAllEnfermeiros);
enfermeiroRouter.post("/enfermeiro/new", createNewEnfermeiro);
enfermeiroRouter.delete("/enfermeiro/delete/:id", deleteEnfermeiroById);
enfermeiroRouter.put("/enfermeiro/update/:id", updateEnfermeiroById);

export { enfermeiroRouter };
