import gradDanger from './components/grad-danger.vue'
import gradTip from './components/grad-tip.vue'
import gradWarn from './components/grad-warn.vue'

export default ({ Vue }) => {
    Vue.component('grad-danger', gradDanger);
    Vue.component('grad-tip', gradTip);
    Vue.component('grad-warn', gradWarn);
}
