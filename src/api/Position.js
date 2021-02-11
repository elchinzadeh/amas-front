import service from './service';

function getAll(config) {
    return service.get('/Position/AllPositions', config);
}

export default {
    getAll
};