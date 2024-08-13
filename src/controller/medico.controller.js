import { Medico } from "../models/medico.model";

export const getAllMedico = async(req, res) =>{
    res.status(200).json(Medico);
}

export const deleteMedicoById = async(req, res) => {
    let parametroId = req.params.id

    let medicoDeletar = await Medico.findByPk(parametroId);

    await medicoDeletar.destroy();

    res.status(200).send('Médico deletado')
}

export const updateMedicoById = async (req, res) => {
    const parametroId = req.params.id; // pegando o id do médico

    const dadosAtulizarMedico = req.body; // pegando os dados para atualizar do médico

    const medicoAtualizar = await Medico.findByPy(parametroId) // verificando se existe algum médico com aquele id

    const medicoAtualizado = await medicoAtualizar.update(dadosAtulizarMedico);

    res.status(200).send({
        message: 'Medico atualizado com sucesso',
        medicoAtualizado,
    })


}


export const createNewMedico = async (req, res) => {
    const createNewMedico = req.body;

    const medicoCriado = await Medico.create(createNewMedico);

    res.status(200).send('Medico criado com sucesso');
}