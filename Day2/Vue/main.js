import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
import App from './App.vue';

Vue.use(VueRouter)

const Post = {
    template: `<div>Hello I am Post</div>`
};

const router = new VueRouter({
    mode: 'history', // Automatically falls back to hash mode on IE9
    routes: [
        { path: '/', component: App }
        { path: '/post/:id', component: Post }
    ]
});

new Vue({
    router,
    template: `
        <div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/post/1">Post 1</router-link></li>
            </ul>
        </div>

        <transition>
            <router-view></router-view>
        </transition>
    `
}).$mount('#app');