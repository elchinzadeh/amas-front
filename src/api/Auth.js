import service from './service';

function signIn(body) {
    return service.post('/SignIn', body);
}

function signUp(body) {
    return service.post('/SignUp', body);
}

export default {
    signIn,
    signUp
};