import service from './service';

function getAll(config) {
    return service.get('/PedagogicalExperience', config);
}

function insert(body) {
    return service.post('/PedagogicalExperience', body);
}

function destroy(config) {
    return service.delete('/PedagogicalExperience', config);
}

export default {
    getAll,
    insert,
    destroy
};