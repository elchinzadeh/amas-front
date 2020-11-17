import _ from './service';

export default {
    name(body) {
        return _.post('name', body);
    }
};

