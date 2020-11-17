// export {default as Auth} from './Auth';
// export {default as PersonalInformation} from './PersonalInformation';

const files = require.context('.', false, /\.js$/);
const modules = {};

files.keys().forEach(key => {
    if (key === './index.js' || key === './service.js') return;
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
});

export default modules;