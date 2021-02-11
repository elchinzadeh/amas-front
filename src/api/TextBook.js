import service from './service';

function getAll(config) {
    return service.get('/Textbook', config);
}

function insert(body) {
    return service.post('/Textbook', body);
}

function destroy(config) {
    return service.delete('/Textbook', config);
}

export default {
    getAll,
    insert,
    destroy
};