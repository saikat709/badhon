import { Router } from 'express';
import genericViewController from './genericViewController.js';

const genericRouterController = ( model, fieldsToPopulate = [] ) => {

    const router = Router();
    const viewController = genericViewController(model, fieldsToPopulate);
    
    router.get('/', viewController.getAll);
    router.get('/search', viewController.getSearched);
    router.get('/:id', viewController.getById);

    router.post('/', viewController.create);
    router.put('/:id', viewController.update);
    router.delete('/:id', viewController.delete);

    return router;
};

export default genericRouterController;
