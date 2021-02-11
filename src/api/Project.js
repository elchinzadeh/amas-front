import service from './service';

function getAll(config) {
    return service.get('/Project', config);
}

function insert(body) {
    return service.post('/Project', body);
}

function destroy(config) {
    return service.delete('/Project', config);
}

export default {
    getAll,
    insert,
    destroy
};