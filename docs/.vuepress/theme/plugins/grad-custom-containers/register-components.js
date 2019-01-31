import gradDanger from './components/grad-danger.vue'
import gradTip from './components/grad-tip.vue'
import gradWarning from './components/grad-warning.vue'

export default ({ Vue }) => {
    Vue.component('grad-danger', gradDanger);
    Vue.component('grad-tip', gradTip);
    Vue.component('grad-warning', gradWarning);
}
