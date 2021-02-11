import service from './service';

function getAll() {
    return service.get('/Country/AllCountries');
}

export default {
    getAll
};