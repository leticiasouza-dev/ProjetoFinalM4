import express from 'express';
import {  createVoluntario,  getAllVoluntarios,  getVoluntarioById,  updateVoluntario,  deleteVoluntario,} from '../controller/voluntario.controller.js';

const voluntarioRouter = express.Router();

voluntarioRouter.post('/', createVoluntario);
voluntarioRouter.get('/', getAllVoluntarios);
voluntarioRouter.get('/:id', getVoluntarioById);
voluntarioRouter.put('/:id', updateVoluntario);
voluntarioRouter.delete('/:id', deleteVoluntario);

export { voluntarioRouter };
