import express from 'express';
import { pacienteRouter } from '../src/routers/paciente.routes';


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', pacienteRouter)
app.use('/api/voluntarios', voluntarioRouter); // erro ( não declarado! )

app.listen(PORT,()=>{
    console.log("Aplication ready")
})