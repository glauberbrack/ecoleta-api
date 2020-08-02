import express from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';

import PointController from '../controllers/PointController';
import ItemController from '../controllers/ItemController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointController = new PointController;
const itemController = new ItemController;

// ITEMS
routes.get('/items', itemController.index);

// POINTS
routes.get('/points', pointController.index)
routes.get('/points/:id', pointController.show)


routes.post('/points', upload.single('image'), pointController.store)


export default routes;