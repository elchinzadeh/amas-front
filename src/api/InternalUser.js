import service from './service';

function getAll(config) {
    return service.get('/InternalUser', config);
}

export default {
    getAll
};