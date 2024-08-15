import { Voluntario } from '../model/voluntario.model.js';

export const createVoluntario = async (req, res) => {
  try {
    const novoVoluntario = await Voluntario.create(req.body);
    res.status(201).json(novoVoluntario);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar voluntário', error });
  }
};

export const getAllVoluntarios = async (req, res) => {
  try {
    const voluntarios = await Voluntario.findAll();
    res.status(200).json(voluntarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar voluntários', error });
  }
};

export const getVoluntarioById = async (req, res) => {
  try {
    const voluntario = await Voluntario.findByPk(req.params.id);
    if (voluntario) {
      res.status(200).json(voluntario);
    } else {
      res.status(404).json({ message: 'Voluntário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar voluntário', error });
  }
};

export const updateVoluntario = async (req, res) => {
  try {
    const [updated] = await Voluntario.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedVoluntario = await Voluntario.findByPk(req.params.id);
      res.status(200).json(updatedVoluntario);
    } else {
      res.status(404).json({ message: 'Voluntário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar voluntário', error });
  }
};

export const deleteVoluntario = async (req, res) => {
  try {
    const deleted = await Voluntario.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json({ message: 'Voluntário deletado com sucesso' });
    } else {
      res.status(404).json({ message: 'Voluntário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar voluntário', error });
  }
};
