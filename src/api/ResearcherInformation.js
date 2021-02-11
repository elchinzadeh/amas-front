import service from './service';

function get(config) {
    return service.get('/ResearcherInformation', config);
}

function update(body) {
    return service.put('/ResearcherInformation/InformationPut', body);
}

export default {
    get,
    update
};