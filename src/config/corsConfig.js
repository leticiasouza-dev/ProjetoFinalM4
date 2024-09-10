import cors from 'cors';

const corsConfig = {
  origin: (origin, callback) => {
    callback(null, true); // Permite qualquer origem
  },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    credentials: true,
    optionsSuccessStatus: 200 
  };

export default cors(corsConfig) 