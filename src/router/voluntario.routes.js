import express from 'express';
import { 
  createVoluntario, 
  getAllVoluntarios, 
  getVoluntarioById, 
  updateVoluntario, 
  deleteVoluntario 
} from '../controller/voluntario.controller.js';

const voluntarioRouter = express.Router();

voluntarioRouter.post('/voluntario', createVoluntario);
voluntarioRouter.get('/voluntario', getAllVoluntarios);
voluntarioRouter.get('/voluntario/:id', getVoluntarioById);
voluntarioRouter.put('/voluntario/:id', updateVoluntario);
voluntarioRouter.delete('/voluntario/:id', deleteVoluntario);

export { voluntarioRouter };