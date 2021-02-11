import service from './service';

function getAll(config) {
    return service.get('/Contact', config);
}

function insert(body) {
    return service.post('/Contact', body);
}

function destroy(config) {
    return service.delete('/Contact', config);
}

export default {
    getAll,
    insert,
    destroy
};