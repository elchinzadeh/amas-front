import service from './service';

function getAll(config) {
    return service.get('/ManagementExperience', config);
}

function insert(body) {
    return service.post('/ManagementExperience', body);
}

function destroy(config) {
    return service.delete('/ManagementExperience', config);
}

export default {
    getAll,
    insert,
    destroy
};