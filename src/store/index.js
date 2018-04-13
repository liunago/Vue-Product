import Vuex from 'vuex'
import Vue from 'vue'
import orderList from './modules/orderList'
Vue.use(Vuex)

//实例化
export default new Vuex.Store({
    modules: {
        orderList
    }
})
