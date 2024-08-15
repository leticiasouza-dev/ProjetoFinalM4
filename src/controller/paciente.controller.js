    import { Paciente } from "../model/paciente.model.js";

export const getAllPaciente = async (req,res) =>{
    try {
        const paciente = await Paciente.findAll() 
        res.status(200).send(paciente);
    } catch {
        res.status(500).send({
            error: "Não foi possivel encontrar os Pacientes",
        });
    }
};

export const createNewPaciente = async (req, res) => {

    try {
        const newPaciente = req.body;
        const pacienteCriado = await Paciente.create(newPaciente);
        res.status(201).send({
            message: "Paciente criado com sucesso",
            novoPaciente: pacienteCriado,
        })
    } catch {
        res.status(500).send({ error: "Não foi possível criar um Paciente" });
    }
};

export const deletePacienteById = async (req, res) =>{
    let idParametro = req.params.id;

	try {
		let pacienteParaDeletar = await Paciente.findByPk(idParametro)

		if (!pacienteParaDeletar) {
      throw new Error("Not found");
    }

		await pacienteParaDeletar.destroy()

		response.status(204).send();
	} catch (e) {
		res.status(404).send(e.message);
	}
}

export const updatePacientesById = async (req, res) => {
    const idParametro = req.params.id;

	try {
		const pacienteDaRequest = req.body
		const pacienteParaAtualizar = await Paciente.findByPk(idParametro)

		if (!pacienteParaAtualizar) {
            throw new Error("Not found");
    }
		//atualizo ele com o método update
		const pacienteAtualizado = await pacienteParaAtualizar.update(pacienteDaRequest)

		res.status(201).send({
			message: "Paciente criado com suceso",
			pacienteAtualizado,
		});

	} catch (e) {
		res.status(404).send({
			error: e.message,
		});
	}
};
