import service from './service';

function getAll(config) {
    return service.get('/Certificate', config);
}

function insert(body) {
    return service.post('/Certificate', body);
}

function destroy(config) {
    return service.delete('/Certificate', config);
}

export default {
    getAll,
    insert,
    destroy
};