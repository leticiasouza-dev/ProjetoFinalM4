import { DataTypes } from "sequelize";
import sequelize from "../database/config.js";

const Agendamento = sequelize.define("Agendamento", {
    AgendamentoID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    DataHora: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    PacienteID: {
        type: DataTypes.INTEGER,
        references: {
            model: "Pacientes", // nome da tabela associada
            key: "PacienteID",
        },
        allowNull: false,
    },
    MedicoID: {
        type: DataTypes.INTEGER,
        references: {
            model: "Medicos", // nome da tabela associada
            key: "MedicoID",
        },
        allowNull: false,
    },
    Observacao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
});

export { Agendamento };
