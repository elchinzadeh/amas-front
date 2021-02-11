import service from './service';

function getAll() {
    return service.get('/LanguageLevel/AllLevels');
}

export default {
    getAll
};