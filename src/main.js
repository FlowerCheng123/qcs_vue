import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store'
import './lib/style/weui.css'
import './style/layout.less'

Vue.use(VueResource);
//If your web server can't handle requests encoded as application/json, you can enable the emulateJSON option. This will send the request as application/x-www-form-urlencoded MIME type, as if from an normal HTML form.
Vue.http.options.emulateJSON = true;
//If your web server can't handle REST/HTTP requests like PUT, PATCH and DELETE, you can enable the emulateHTTP option. This will set the X-HTTP-Method-Override header with the actual HTTP method and use a normal POST request.
Vue.http.options.emulateHTTP = true;

new Vue({
    router,
    store,
    el: '#app',
    template: '<router-view class="view"></router-view>',
    components: { App }
})
