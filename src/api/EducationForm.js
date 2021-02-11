import service from './service';

function getAll() {
    return service.get('/EducationForm/AllEducationForms');
}

export default {
    getAll
};