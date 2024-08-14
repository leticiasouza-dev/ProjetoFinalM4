import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

const VoluntarioSaude = sequelize.define("VoluntarioSaude", {
    VoluntarioID: {
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
    Sexo: {
        type: DataTypes.ENUM('Masculino', 'Feminino', 'Outro'),
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
    Especialidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Disponibilidade: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

export { VoluntarioSaude };
