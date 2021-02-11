import service from './service';

function getAll() {
    return service.get('/EducationLevel/AllEducationLevels');
}

export default {
    getAll
};