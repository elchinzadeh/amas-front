import service from './service';

function getAll() {
    return service.get('/researchAreas');
}

export default {
    getAll
};