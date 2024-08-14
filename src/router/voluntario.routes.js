import express from 'express';
import {
  createVoluntario,
  getAllVoluntarios,
  getVoluntarioById,
  updateVoluntario,
  deleteVoluntario,
} from '../controllers/voluntario.controller.js';

const router = express.Router();

router.post('/', createVoluntario);
router.get('/', getAllVoluntarios);
router.get('/:id', getVoluntarioById);
router.put('/:id', updateVoluntario);
router.delete('/:id', deleteVoluntario);

export default router;
