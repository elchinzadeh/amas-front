import service from './service';

function getAll(config) {
    return service.get('/ContactType/AllContactTypes', config);
}

export default {
    getAll
};