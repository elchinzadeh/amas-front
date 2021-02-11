import service from './service';

function getAll(config) {
    return service.get('/ResearcherLanguage', config);
}

function insert(body) {
    return service.post('/ResearcherLanguage', body);
}

function destroy(config) {
    return service.delete('/ResearcherLanguage', config);
}

export default {
    getAll,
    insert,
    destroy
};