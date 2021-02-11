import service from './service';

function getAll(config) {
    return service.get('/Journal', config);
}

export default {
    getAll
};