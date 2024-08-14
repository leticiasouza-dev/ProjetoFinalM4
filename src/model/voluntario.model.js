import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Voluntario = sequelize.define('Voluntario', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

export default Voluntario;
