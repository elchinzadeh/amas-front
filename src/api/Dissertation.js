import service from './service';

function getAll(config) {
    return service.get('/Dissertation', config);
}

function insert(body) {
    return service.post('/Dissertation', body);
}

function destroy(config) {
    return service.delete('/Dissertation', config);
}

export default {
    getAll,
    insert,
    destroy
};