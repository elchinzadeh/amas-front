import service from './service';

function getAll(config) {
    return service.get('/Publisher/AllPublishers', config);
}

export default {
    getAll
};