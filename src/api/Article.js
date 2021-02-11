import service from './service';

function getAll(config) {
    return service.get('/Article', config);
}

function insert(body) {
    return service.post('/Article', body);
}

function destroy(config) {
    return service.delete('/Article', config);
}

export default {
    getAll,
    insert,
    destroy
};