export default {
    props: {
        currentPageNo: Number,
        pageNum: Number
    },
    setup(props) {
    },
    template: /*html*/`<p>
    <RouterLink to="/p/1">1</RouterLink>~<RouterLink :to="\`/p/\${pageNum}\`">{{pageNum}}</RouterLink>
    <RouterLink v-if="currentPageNo>1" :to="\`/p/\${currentPageNo-1}\`">Last</RouterLink>
    <RouterLink v-if="currentPageNo<pageNum" :to="\`/p/\${currentPageNo+1}\`">Next</RouterLink>
    </p>`
}
