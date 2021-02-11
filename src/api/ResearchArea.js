import service from './service';

function getAll() {
    return service.get('/ResearchArea/AllResearchAreas');
}

export default {
    getAll
};