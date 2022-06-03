import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/register",
            name: "register",
            component: () => import("../views/register")
        },
        {
            path: "/search",
            name: "search",
            component: () => import("../views/search")
        },
        {
            path: "/update/:id",
            name: "update",
            component: () => import("../views/update")
        },
        {
            path: "/delete/:id",
            name: "delete",
            component: () => import("../views/delete")
        }
    ]
})