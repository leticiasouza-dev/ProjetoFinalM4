import { Agendamento } from "../../../src/models/paciente.model.js";

export const getAllAgendamentos = async (req, res) => {
    try {
        const agendamentos = await Agendamento.findAll();
        res.status(200).send(agendamentos);
    } catch {
        res.status(500).send({
            error: "Não foi possível encontrar os agendamentos",
        });
    }
};

export const createNewAgendamento = async (req, res) => {
    try {
        const newAgendamento = req.body;
        const agendamentoCriado = await Agendamento.create(newAgendamento);
        res.status(201).send({
            message: "Agendamento criado com sucesso",
            novoAgendamento: agendamentoCriado,
        });
    } catch {
        res.status(500).send({ error: "Não foi possível criar um agendamento" });
    }
};

export const deleteAgendamentoById = async (req, res) => {
    let idParametro = req.params.id;

    try {
        let agendamentoParaDeletar = await Agendamento.findByPk(idParametro);

        if (!agendamentoParaDeletar) {
            throw new Error("Agendamento não encontrado");
        }

        await agendamentoParaDeletar.destroy();
        res.status(204).send();
    } catch (e) {
        res.status(404).send({ error: e.message });
    }
};

export const updateAgendamentoById = async (req, res) => {
    const idParametro = req.params.id;

    try {
        const agendamentoDaRequest = req.body;
        const agendamentoParaAtualizar = await Agendamento.findByPk(idParametro);

        if (!agendamentoParaAtualizar) {
            throw new Error("Agendamento não encontrado");
        }

        const agendamentoAtualizado = await agendamentoParaAtualizar.update(agendamentoDaRequest);

        res.status(201).send({
            message: "Agendamento atualizado com sucesso",
            agendamentoAtualizado,
        });
    } catch (e) {
        res.status(404).send({
            error: e.message,
        });
    }
};
