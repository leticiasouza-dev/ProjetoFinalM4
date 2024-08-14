import { VoluntarioSaude } from "../model/voluntariosaude.model.js";

export const getAllVoluntarios = async (req, res) => {
    try {
        const voluntarios = await VoluntarioSaude.findAll();
        res.status(200).send(voluntarios);
    } catch {
        res.status(500).send({
            error: "Não foi possível encontrar os voluntários de saúde",
        });
    }
};

export const createNewVoluntario = async (req, res) => {
    try {
        const newVoluntario = req.body;
        const voluntarioCriado = await VoluntarioSaude.create(newVoluntario);
        res.status(201).send({
            message: "Voluntário de saúde criado com sucesso",
            novoVoluntario: voluntarioCriado,
        });
    } catch {
        res.status(500).send({ error: "Não foi possível criar um voluntário de saúde" });
    }
};

export const deleteVoluntarioById = async (req, res) => {
    let idParametro = req.params.id;

    try {
        let voluntarioParaDeletar = await VoluntarioSaude.findByPk(idParametro);

        if (!voluntarioParaDeletar) {
            throw new Error("Not found");
        }

        await voluntarioParaDeletar.destroy();

        res.status(204).send();
    } catch (e) {
        res.status(404).send(e.message);
    }
};

export const updateVoluntarioById = async (req, res) => {
    const idParametro = req.params.id;

    try {
        const voluntarioDaRequest = req.body;
        const voluntarioParaAtualizar = await VoluntarioSaude.findByPk(idParametro);

        if (!voluntarioParaAtualizar) {
            throw new Error("Not found");
        }

        const voluntarioAtualizado = await voluntarioParaAtualizar.update(voluntarioDaRequest);

        res.status(201).send({
            message: "Voluntário de saúde atualizado com sucesso",
            voluntarioAtualizado,
        });

    } catch (e) {
        res.status(404).send({
            error: e.message,
        });
    }
};
