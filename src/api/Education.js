import _ from './service';

export default {
    getAll() {
        return _.get('Education/GetAll');
    }
};

