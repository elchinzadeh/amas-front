import service from './service';

function getAll() {
    return service.get('/Profession/AllProfessions');
}

export default {
    getAll
};