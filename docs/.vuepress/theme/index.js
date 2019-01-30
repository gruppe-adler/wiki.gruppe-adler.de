module.exports = {
    extend: '@vuepress/theme-default',
    plugins: [
        require('./plugins/grad-custom-containers/'),
        require('./plugins/grad-md-preview/'),
        require('./plugins/grad-highlightjs/')
    ]
}
  