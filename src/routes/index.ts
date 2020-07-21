import express from 'express';

import PointController from '../controllers/PointController';
import ItemController from '../controllers/ItemController';

const routes = express.Router();
const pointController = new PointController;
const itemController = new ItemController;

// ITEMS
routes.get('/items', itemController.index);

// POINTS
routes.get('/points', pointController.index)
routes.post('/points', pointController.store)
routes.get('/points/:id', pointController.show)


export default routes;