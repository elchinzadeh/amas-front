import service from './service';

function getAll(config) {
    return service.get('/ResearcherResearchArea', config);
}

function insert(body) {
    return service.post('/ResearcherResearchArea', body);
}

function destroy(config) {
    return service.delete('/ResearcherResearchArea', config);
}

export default {
    getAll,
    insert,
    destroy
};