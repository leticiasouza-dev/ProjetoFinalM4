import cors from 'cors';

const corsConfig = {
  origin: (origin, callback) => {
    callback(null, true); // Permite qualquer origem
  },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Content-Type', 'Authorization'], // Cabeçalhos permitidos
    credentials: true,
    optionsSuccessStatus: 200 
  };

export default cors(corsConfig) 