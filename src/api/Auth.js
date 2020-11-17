import _ from './service';

export default {
    signIn(body) {
        return _.post('SignIn', body);
    },
    signUp(body) {
        return _.post('SignUp', body);
    }
};

