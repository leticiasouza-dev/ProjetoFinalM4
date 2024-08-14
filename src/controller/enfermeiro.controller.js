import { Enfermeiro } from "../../../src/models/paciente.model.js";

export const getAllEnfermeiros = async (req, res) => {
    try {
        const enfermeiros = await Enfermeiro.findAll();
        res.status(200).send(enfermeiros);
    } catch {
        res.status(500).send({
            error: "Não foi possível encontrar os Enfermeiros",
        });
    }
};

export const createNewEnfermeiro = async (req, res) => {
    try {
        const newEnfermeiro = req.body;
        const enfermeiroCriado = await Enfermeiro.create(newEnfermeiro);
        res.status(201).send({
            message: "Enfermeiro criado com sucesso",
            novoEnfermeiro: enfermeiroCriado,
        });
    } catch {
        res.status(500).send({ error: "Não foi possível criar um Enfermeiro" });
    }
};

export const deleteEnfermeiroById = async (req, res) => {
    let idParametro = req.params.id;

    try {
        let enfermeiroParaDeletar = await Enfermeiro.findByPk(idParametro);

        if (!enfermeiroParaDeletar) {
            throw new Error("Enfermeiro não encontrado");
        }

        await enfermeiroParaDeletar.destroy();
        res.status(204).send();
    } catch (e) {
        res.status(404).send({ error: e.message });
    }
};

export const updateEnfermeiroById = async (req, res) => {
    const idParametro = req.params.id;

    try {
        const enfermeiroDaRequest = req.body;
        const enfermeiroParaAtualizar = await Enfermeiro.findByPk(idParametro);

        if (!enfermeiroParaAtualizar) {
            throw new Error("Enfermeiro não encontrado");
        }

        const enfermeiroAtualizado = await enfermeiroParaAtualizar.update(enfermeiroDaRequest);

        res.status(201).send({
            message: "Enfermeiro atualizado com sucesso",
            enfermeiroAtualizado,
        });
    } catch (e) {
        res.status(404).send({
            error: e.message,
        });
    }
};
