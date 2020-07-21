import {Request, Response} from 'express';
import knex from '../database/connection';

class PointController {
    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            lat,
            long,
            city,
            uf,
            items
        } = request.body;
    
        const trx = await knex.transaction();

        const point = {
            image: 'null',
            name,
            email,
            whatsapp,
            lat,
            long,
            city,
            uf
        }
    
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0];
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        })
    
        await trx('point_items').insert(pointItems)
    
        return response.json({
            id: point_id,
            ...point
            
        })
    }
}

export default PointController;
