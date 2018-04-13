<template>
  <div class="detail-wrap">
    <div class="detail-left">
      <div class="product-board">
        <img :src="productIcon">
        <ul>
          <router-link v-for="item in products" :to="{ path: item.path }" tag="li" active-class="active">
            {{ item.name }}
          </router-link>
          <!-- router-link默认生成a标签  使用tag='li' 可生成li标签 -->
        </ul>
      </div>
    </div>
    <div class="detail-right">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>

export default {
    data() {
      return{
        products:[
          {
            name: '流量分析',
            path: 'analysis',
            active: false
          },
            {
            name: '数据统计',
            path: 'count',
            //icon: require('../assets/images/1.png'),
            //这里不能直接写成icon: '../assets/images/1.png',webapck打包会把他看成字符串，也不会引入图片，需要用require
            active: false
          },
          {
            name: '数据预测',
            path: 'forecast',
            active: false
          },
          {
            name: '广告发布',
            path: 'publish',
            active: false
          }
        ],
        //这里根据（this.$route.path获取当前路由path）映射的方法引入图片   
        imgMap:{
          '/detail/count': require("../../static/images/1.png"),
          '/detail/forecast': require("../../static/images/2.png"),
          '/detail/analysis': require("../../static/images/3.png"),
          '/detail/publish': require("../../static/images/4.png")
        }
      }
    },
    computed:{
      productIcon(){
        return this.imgMap[this.$route.path];
      }
    }
  
}
</script>

<style>
.detail-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 20px;
}
.detail-left {
  float: left;
  width: 200px;
  text-align: center;
}
.detail-right {
  float: left;
  width: 980px;
  margin-left: 20px;
}
.product-board {
  background: #fff;
  padding: 20px 0;
}
.product-board ul {
  margin-top: 20px;
}
.product-board li {
  text-align: left;
  padding: 10px 15px;
  cursor: pointer;
}
.product-board li.active,
.product-board li:hover {
  background: #4fc08d;
  color: #fff;
}
.product-board li a {
  display: block;
}
.sales-board {
  background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
  font-size: 20px;
  padding: 20px;
}
.sales-board-intro p {
  background: #f7fcff;
  padding: 10px 20px;
  color: #999;
  line-height: 1.8;
}
.sales-board-form {
  padding: 30px 20px;
  font-size: 14px;
}
.sales-board-line {
  clear: both;
  padding-bottom: 20px;
}
.sales-board-line-left {
    display: inline-block;
    width: 100px;
}
.sales-board-line-right {
    display: inline-block;
    width: 75%;
}
.sales-board-des {
  border-top: 20px solid #f0f2f5;
  padding: 15px 20px;
}
.sales-board-des p {
  line-height: 1.6;
}
.sales-board-des h2 {
  font-size: 20px;
  padding-bottom: 15px;
}
.sales-board-des h3 {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 0 10px 0;
}
.sales-board-des li {
  padding: 5px 0;
}
.sales-board-table {
  width: 100%;
  margin-top: 20px;
}
.sales-board-table th {
  background: #4fc08d;
  color: #fff;
}
.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}

</style>
