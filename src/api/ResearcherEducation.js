import service from './service';

function getAll(config) {
    return service.get('/ResearcherEducation', config);
}

function insert(body) {
    return service.post('/ResearcherEducation', body);
}

function destroy(config) {
    return service.delete('/ResearcherEducation', config);
}

export default {
    getAll,
    insert,
    destroy
};