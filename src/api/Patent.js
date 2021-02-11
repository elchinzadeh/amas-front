import service from './service';

function getAll(config) {
    return service.get('/Patent', config);
}

function insert(body) {
    return service.post('/Patent', body);
}

function destroy(config) {
    return service.delete('/Patent', config);
}

export default {
    getAll,
    insert,
    destroy
};