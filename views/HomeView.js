import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import PageNavigator from '../components/PageNavigator.js'

export default {
    // use Vue.component('my-component', MyComponent); to register <my-component /> globally
    components: { // local reigster
        'PageNavigator': PageNavigator
    },
    setup() {
        const route = useRoute()
        function getPageNo(pageNoStr) {
            const no = Number.parseInt(pageNoStr)
            return Number.isNaN(no) ? 1 : no
        }
        const pageNo = ref(getPageNo())
        // if not watched, pageNo will not be updated
        watch(() => route.params.pageNo, (newValue, _oldValue) => {
            pageNo.value = getPageNo(newValue)
        })
        const pageNum = 5
        const count = ref(0)
        function inc() {
            count.value += 1
        }
        return { pageNo, pageNum, count, inc, PageNavigator }
    },
    template: /*html*/
        `<main>This is page {{ pageNo }} of {{ pageNum }}<br>
        count: {{ count }}<br>
        <button @click="inc">Inc</button></main>
        <PageNavigator :currentPageNo="pageNo" :pageNum="pageNum"></PageNavigator>`
}
