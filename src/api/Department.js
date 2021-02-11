import service from './service';

function getAll(config) {
    return service.get('/Department/AllDepartments', config);
}

export default {
    getAll
};