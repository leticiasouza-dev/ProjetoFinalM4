import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

const Paciente = sequelize.define("Paciente",{
    PacienteID: {
        type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    DataNascimento: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    Sexo:{
        type: DataTypes.ENUM('Masculino','Feminino','Outro'),
        allowNull: true,
    },
    Telefone: {
        type: DataTypes.STRING,
    },
    Endereco: {
        type: DataTypes.TEXT,
    },
   
});

export { Paciente };