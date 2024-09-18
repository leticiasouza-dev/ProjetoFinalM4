import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

export const Medico = sequelize.define('Medico', {
    MedicoId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Email: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Telefone: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    Hospital: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})