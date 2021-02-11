import service from './service';

function getAll() {
    return service.get('/Organization/AllOrganizations');
}

export default {
    getAll
};