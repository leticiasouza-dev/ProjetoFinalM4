import { Medico } from "../model/medico.model.js";

export const getAllMedico = async(req, res) =>{
    try{
        const medico = await Medico.findAll(); // find all: pegar todos, encontrar todos
        res.status(200).json(medico);
    } catch{
        res.status(400).send({erro:
            'Médico não encontrado'
        });
    }
}

export const getMedicoById = async(req, res) => {
    try{
        const parametroId = req.params.id
        const medicoEncontrado = await Medico.findByPk(parametroId) //pegar de acordo com o id

        res.status(200).send(medicoEncontrado);
    } catch{
        res.status(400).send('Médico não encontrado');
    }
}

export const getMedicoByEmailAndTelefone = async(req, res) => {
    try{
        const email = decodeURIComponent(req.query.email);
        const telefone = req.query.telefone;
        
        const medico = await Medico.findOne({
            where: {
                Email: email,
                Telefone: telefone
            }
        });

        if (!medico) {
            return res.status(404).json({ message: 'Médico não encontrado' });
        }

        res.status(200).json(medico);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao consultar médico' });
    }
};


export const deleteMedicoById = async(req, res) => {
    try{
        let parametroId = req.params.id

        let medicoDeletar = await Medico.findByPk(parametroId);

        await medicoDeletar.destroy();

        if(!medicoDeletar){
            throw new Error('Médico não encontrado');
        }

        res.status(200).send('Médico deletado')

    } catch{
        res.status(400).send({erro: "Não foi possível deletar esse médico"})
    }
}

export const updateMedicoById = async (req, res) => {
    try{
        const parametroId = req.params.id; // pegando o id do médico

        const dadosAtulizarMedico = req.body; // pegando os dados para atualizar do médico

        const medicoAtualizar = await Medico.findByPk(parametroId) // verificando se existe algum médico com aquele id

        const medicoAtualizado = await medicoAtualizar.update(dadosAtulizarMedico);

        res.status(200).send({
            message: 'Medico atualizado com sucesso',
            medicoAtualizado,
        })
    } catch{
        res.status(400).send({erro: 'Não foi possivel atualizar o médico'});
    }
}

export const createNewMedico = async (req, res) => {
    try{
        const createNewMedico = req.body;

        const medicoCriado = await Medico.create(createNewMedico);

        res.status(200).send({
            message: 'Médico criado com sucesso',
            novoMedico: medicoCriado
        });

    } catch{
        res.status(500).send({erro: 'Não foi possivel criar novo médico'});
    }
}