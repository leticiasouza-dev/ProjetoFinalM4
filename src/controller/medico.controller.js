import { Medico } from "../models/medico.model";

export const getAllMedico = async(req, res) =>{
    res.status(200).json(Medico);
}

export const deleteMedicoById = async(req, res) => {
    let parametroId = req.params.id

    let medicoDeletar = await Medico.findByPk(parametroId);

    await medicoDeletar.destroy();
}