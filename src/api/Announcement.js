import service from './service';

function getAll(config) {
    return service.get('/Announcement', config);
}

function insert(body) {
    return service.post('/Announcement', body);
}

function destroy(config) {
    return service.delete('/Announcement', config);
}

export default {
    getAll,
    insert,
    destroy
};