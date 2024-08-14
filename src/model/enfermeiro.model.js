import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

const Enfermeiro = sequelize.define("Enfermeiro", {
    EnfermeiroID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Coren: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Especialidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Endereco: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

export { Enfermeiro };
