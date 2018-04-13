import Vue from 'vue'
import axios from 'axios'
import mockdata from '../../mock/mock.js'
const state = {
    orderList: [],
    params:{}
}

//只能进行同步操作  在这里改变state中的数据
const mutations = {
    updateOrderList(state,payload){
        state.orderList = payload
        console.log(1,payload)
        console.log(2,state.orderList)
    },
    updateParams(state,{key,val}){
        state.params[key] = val
    }
    
}

//有些状态需要做二次处理,就可以使用getters，和vue中的computed 类似,都是用来计算state然后生成新的数据(状态)的
//比如页面中无法直接通过state获取数据orderList   通过getters调getOrderLIst
const getters = {
    getOrderLIst(state){
        console.log(3,state.orderList)
        return state.orderList;
    }

}

//也可以用于改变状态，不过是通过触发mutation实现的 主要可以进行异步操作
const actions = {
    fetchOrderList({commit, state}){
        //commit用来调用mutations
        axios.post('/api/getOrderList', state.params)
        .then((res) => {
          //state.orderList = res.data.orderlist
          console.log(res.data.orderlist)
          commit('updateOrderList',res.data.orderlist)
        })
        .catch((error) =>{
             console.log(error)
        })
    }
    
}



export default{
    state,
    getters,
    actions,
    mutations
}