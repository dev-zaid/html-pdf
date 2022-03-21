import { Router } from 'express';
import handleConverter from './convert/controller';

export default (): Router => {
  const app = Router();
  app.post('/convert', handleConverter);
  //TODO: add routes here...

  return app;
};
