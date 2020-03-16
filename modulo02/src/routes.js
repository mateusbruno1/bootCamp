import  {Router} from  'express';


import UserController from './app/controllers/UserController';
import sessionController from './app/controllers/SessionController';
import authMiddleaware from './app/middlewares/auth';
const routes = new Router();

routes.post('/users',UserController.store);
routes.post('/sessions',sessionController.store);
routes.use(authMiddleaware)
routes.put('/users',UserController.update);



export default  routes;