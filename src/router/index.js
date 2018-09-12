import Vue from "vue"
import VueRouter from "vue-router"

//Vue.use(VueRouter);

const routes=[
    {
        path:"/",
        component: nav-bar
    },
]

var router = new VueRouter({
    routes
})

export default router;