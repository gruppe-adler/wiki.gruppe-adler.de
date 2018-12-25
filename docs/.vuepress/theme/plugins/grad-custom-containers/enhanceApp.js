const register = require('../grad-shared-utils/register-components.js');
const path = require('path');

const components = [
    {
        'name': 'grad-tip',
        'path': path.resolve(__dirname, 'components/grad-tip.vue')
    },
    {
        'name': 'grad-warn',
        'path': path.resolve(__dirname, 'components/grad-warn.vue')
    },
    {
        'name': 'grad-danger',
        'path': path.resolve(__dirname, 'components/grad-danger.vue')
    }
]

module.exports = () => {
    return register('grad-custom-containers', components);
}
