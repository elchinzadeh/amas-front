import service from './service';

function getAll(config) {
    return service.get('/ExternalUser', config);
}

function insert(config) {
    return service.post('/ExternalUser', config);
}

export default {
    getAll,
    insert
};