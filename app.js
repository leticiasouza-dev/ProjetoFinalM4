import express from 'express';
import sequelize from '../ProjetoFinalM4/src/database/config.js';
import corsConfig from './src/config/corsConfig.js';
import { pacienteRouter } from '../src/routers/paciente.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(corsConfig);

app.use('/api', pacienteRouter)

sequelize
    .sync()
    .then(()=>{
        app.listen(PORT,()=>{
			console.log(`A aplicação está rodando na porta http://localhost:${PORT}`);
        })
    })
    .catch((erro) => {
		console.error("Não foi possível conectar no banco de dados", erro);
	});