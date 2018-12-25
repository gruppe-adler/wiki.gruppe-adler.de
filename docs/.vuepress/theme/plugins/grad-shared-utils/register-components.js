module.exports = async (id, components) => {
    let code = ''

    code += components.map(({ name, path }) => `Vue.component(${JSON.stringify(name)}, () => import(${JSON.stringify(path)}))`)

    code = `import Vue from 'vue'\n` + code + '\n'

    return [
        {
            name: `register-components-${id}.js`,
            content: code
        }
    ]
}