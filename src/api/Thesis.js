import service from './service';

function getAll(config) {
    return service.get('/Thesis', config);
}

function insert(body) {
    return service.post('/Thesis', body);
}

function destroy(config) {
    return service.delete('/Thesis', config);
}

export default {
    getAll,
    insert,
    destroy
};