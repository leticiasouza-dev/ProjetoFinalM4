import { getAllVoluntarios, createNewVoluntario, deleteVoluntarioById, updateVoluntarioById } from "../controller/voluntariosaude.controller.js";
import { Router } from "express";

const voluntarioSaudeRouter = Router();

voluntarioSaudeRouter.get("/voluntariosaude/all", getAllVoluntarios);

voluntarioSaudeRouter.post("/voluntariosaude/new", createNewVoluntario);

voluntarioSaudeRouter.delete("/voluntariosaude/delete/:id", deleteVoluntarioById);

voluntarioSaudeRouter.put("/voluntariosaude/update/:id", updateVoluntarioById);

export { voluntarioSaudeRouter };
