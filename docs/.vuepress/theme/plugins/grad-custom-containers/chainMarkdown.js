const { PLUGINS } = require('@vuepress/markdown/lib/constant');

module.exports = config => {
    // remove default containers plugin 
    config.plugins.delete(PLUGINS.CONTAINERS);

    // add own containers plugin
    config.plugin('grad-containers')
        .use(require("./containersPlugin.js"))
        .end()
}