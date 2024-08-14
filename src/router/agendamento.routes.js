import { getAllAgendamentos, createNewAgendamento, deleteAgendamentoById, updateAgendamentoById } from "../controller/agendamento.controller";
import { Router } from "express";

const agendamentoRouter = Router();

agendamentoRouter.get("/agendamento/all", getAllAgendamentos);
agendamentoRouter.post("/agendamento/new", createNewAgendamento);
agendamentoRouter.delete("/agendamento/delete/:id", deleteAgendamentoById);
agendamentoRouter.put("/agendamento/update/:id", updateAgendamentoById);

export { agendamentoRouter };
