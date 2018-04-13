<template>
<div>
   <this-dialog :is-show="isShowCheckDialog" @on-close="closeThisDialog">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </this-dialog>
    <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </this-dialog>
</div>
  
</template>

<script>
import Dialog from './dialog.vue'
import axios from 'axios'
    export default {
       components: {
            thisDialog: Dialog
        },
        props:{
            //父组件调用组件时  需要绑定属性  :is-show-chack-dialog = "xxx"
            isShowCheckDialog:{
                type: Boolean,
                default: false
            },
            //父组件调用组件时  需要绑定属性  :order-id = "xxx"
            orderId: {
                type: [String, Number]
            }
        },
        data(){
            return {
                isShowSuccessDialog: false,
                isShowFailDialog: false
            }
        },
        methods:{
            checkStatus(){
                axios.post('api/checkOrder',{orderId: this.orderId})    
                .then((res) => {
                    this.isShowSuccessDialog = true //支付成功
                    this.isShowCheckDialog = false //关闭当前弹框
                })
                .catch((error) => {
                    console.log(error)
                     this.isShowFailDialog = true //支付失败
                     this.isShowCheckDialog = false //关闭当前弹框
                })
            },
            closeThisDialog(){
                //触发父组件事件关闭   也可直接关闭
                this.$emit('on-close-check-dialog');  
                //this.isShowCheckDialog = false;  //  直接关闭
            },
            toOrderList () {
                this.$router.push({path: '/orderList'}) //跳转订单列表页面
            }
        }
    }
</script>

<style scoped>

</style>

