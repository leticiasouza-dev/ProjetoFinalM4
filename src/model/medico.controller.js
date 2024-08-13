import { DataTypes } from "sequelize";

export const Medico = sequilize.define('Medico', {
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
        type: DataTypes.NUMBER,
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