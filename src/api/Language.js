import service from './service';

function getAll() {
    return service.get('/ForeignLanguage/AllLanguages');
}

export default {
    getAll
};