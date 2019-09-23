import Vue from 'vue'
import Router from 'vue-router'
import Film from '@/views/film.vue'
import Cinema from '@/views/cinema.vue'
import Mine from '@/views/mine.vue'
import Nowplaying from '@/components/film/nowpalying.vue'
import Comingsoon from '@/components/film/comingsoon.vue'
// import City from '@/views/city.vue'
import Details from '@/components/film/details.vue'
import DetailsMove from '@/components/film/detailsMove.vue'

Vue.use(Router)

// NavigationDuplicated 当出现该错误时, 添加以下代码
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//把router变成一个实例

var router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            redirect: "/film",

        }, {
            path: "/film",
            name: "film",
            redirect: "/film/nowpalying",
            component: Film,
            children: [{
                path: "nowpalying",
                name: "nowpalying",
                component: Nowplaying
            }, {
                path: "/film/comingsoon",
                name: "comingsoon",
                component: Comingsoon
            }]
        },
        {
            path: "/cinema",
            name: "cinema",
            component: Cinema
        },
        {
            path: "/mine",
            name: "mine",
            component: Mine
        },
        {
            path: "/city",
            name: "city",
            component: () =>
                import ('@/views/city.vue')
        }, {
            path: "/details",
            name: "details",
            component: Details
        }, {
            path: "/detailsMove",
            name: "detailsMove",
            component: DetailsMove
        }
    ],

});

router.beforeEach((to, from, next) => {
    next()
    switch (to.name) {
        case 'nowpalying':
        case 'comingsoon':
            window.sessionStorage.setItem('tabbarItem', '电影')
                // this.$store.commit("changeType", true)
            break;
        case 'cinema':
            window.sessionStorage.setItem('tabbarItem', '影院')
            break;
        case 'mine':
            window.sessionStorage.setItem('tabbarItem', '我的')
            break;

        default:
            break;
    }

})
export default router