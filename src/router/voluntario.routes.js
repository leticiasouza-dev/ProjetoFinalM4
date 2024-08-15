import express from 'express';
import {  createVoluntario,  getAllVoluntarios,  getVoluntarioById,  updateVoluntario,  deleteVoluntario,} from '../controller/voluntario.controller.js';

const voluntarioRouter = express.Router();

voluntarioRouter.post('/voluntario/new', createVoluntario);
voluntarioRouter.get('/voluntario/all', getAllVoluntarios);
voluntarioRouter.get('/voluntario/all:id', getVoluntarioById);
voluntarioRouter.put('/voluntario/update/:id', updateVoluntario);
voluntarioRouter.delete('/voluntario/delete/:id', deleteVoluntario);

export { voluntarioRouter };
