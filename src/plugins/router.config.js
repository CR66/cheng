import Vue from 'vue';
import Vuerouter from 'vue-router';
Vue.use(Vuerouter);
import Reg from '../components/Reg.vue';
import Login from '../components/Login.vue';
import Letter from '../components/Letter.vue';
import Video from '../components/Video.vue';
import Contect from '../components/Contect.vue';
import Margin from '../components/Margin.vue';
import Activity from "../components/Activity.vue";
import User from "../components/User.vue"

let routes=[
    {path:'/reg',component:Reg},
    {path:'/login',component:Login},
    {path:'/contect',component:Contect},
    {path:'/video',component:Video},
    {path:'/letter',component:Letter},
    {path:'/activity',component:Activity},
    {path:'/',component:Margin},
    {path:'/user',component:User}
];
let router=new Vuerouter({
    mode: 'history',
    routes
});

export default router;