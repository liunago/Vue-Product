<template>
  <div  class="index-wrap">
      <div class="index-left">
          <div class="index-left-block">
              <h2>全部产品</h2>
               <template v-for="product in productList">
                <h3>{{ product.title}}</h3>
                <ul>
                    <li v-for="item in product.list">
                    <a :href="item.url">{{ item.name }}</a>
                    <span v-if="item.hot" class="hot-tag">HOT</span>
                    </li>
                </ul>
               <div v-if="!product.last" class="hr"></div>
              </template>
          </div>
          <div class="index-left-block lastest-news">
            <h2>最新消息</h2>
            <ul>
            <li v-for="item in newsList">
                <a :href="item.url" class="new-item">{{ item.title }}</a>
            </li>
            </ul>
        </div>

      </div>
      <div class="index-right">
          <slide-show :slides="slides" :inv="invTime"></slide-show>
          <div class="index-board-list">
            <div class="index-board-item"  v-for="(item, index) in boardList"  
            :class="[{'line-last' : index % 2 !== 0}, 'index-board-' + item.id]">
                <div class="index-board-item-inner" >
                    <h2>{{ item.title }}</h2>
                    <p>{{ item.description }}</p>
                    <div class="index-board-button">
                         <router-link class="button" :to="{path: 'detail/' + item.toKey}">立即购买</router-link>
                    </div>  
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import mockdata from '../mock/mock.js'
import slideShow from '../components/slideShow'  //引入组件
export default {
    components:{
        slideShow  //注册组件
    },
     data () {
        return {
            invTime: 2000,
            newsList: [],
            slides:[],
            //无接口也不用mockjs模拟数据时，可以写假数据
            productList: {
                pc: {
                        title: 'PC产品',
                        list: [
                            {
                                name: '数据产品',
                                url: 'http://starcraft.com'
                            },
                            {
                                name: '电商产品',
                                url: 'http://warcraft.com'
                            },
                            {
                                name: '游戏产品',
                                url: 'http://overwatch.com',
                                hot: true
                            },
                            {
                                name: '课程产品',
                                url: 'http://hearstone.com'
                            }
                        ]
                    },
                app:{
                        title: '手机应用',
                        list: [
                            {
                                name: '手游产品',
                                url: 'http://starcraft.com'
                            },
                            {
                                name: '电商产品',
                                url: 'http://warcraft.com'
                            },
                            {
                                name: '理财产品',
                                url: 'http://overwatch.com',
                                hot: true
                            },
                            {
                                name: '学习产品',
                                url: 'http://hearstone.com'
                            }
                        ]
                }
            },
            boardList: [
                {
                    title: '数据统计',
                    description: '精准快速的查找与分类。',
                    id: 'car',
                    toKey: 'count',
                    saleout: false
                },
                {
                    title: '数据预测',
                    description: '智能分析，允许业务用户自助分析',
                    id: 'earth',
                    toKey: 'forecast',
                    saleout: false
                },
                {
                    title: '流量分析',
                    description: '对子目标的度量和改进，持续促进网站目标达成',
                    id: 'loud',
                    toKey: 'analysis',
                    saleout: true
                },
                {
                    title: '广告发布',
                    description: '帮你勇闯高峰，到达事业的顶峰',
                    id: 'hill',
                    toKey: 'publish',
                    saleout: false
                }
            ],
           
        }
    },
    mounted() {
        //因为没有接口，使用mockjs来模拟数据 ，在需要用到的mock数据的vue组件页面中引入mock.js
       //mockjs作用生成随机数据，拦截ajax请求(详见官方文档)
    
        axios.get('api/getNewsList')    //使用axios发送get请求 
        .then((res) => {
            this.newsList = res.data.list //mockjs作用生成随机数据
        })
        .catch((error) => {
            console.log(error)
        })

         axios.get('api/getSlides')    
        .then((res) => {
            this.slides = res.data  //mockjs作用生成随机数据
        })
        .catch((error) => {
            console.log(error)
        })
     

    },
   
}
</script>

<style scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: left;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block li {
  padding: 5px;
}
.index-board-list {
  overflow: hidden;
}
.index-board-item {
  float: left;
  width: 400px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
  padding: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
}
.index-board-item-inner {
  min-height: 125px;
  padding-left: 120px;
}

.index-board-car .index-board-item-inner{
  background: url(../assets/images/1.png) no-repeat;
  background-size:90px 90px;
}
.index-board-loud .index-board-item-inner{
  background: url(../assets/images/2.png) no-repeat;
  background-size:90px 90px;
}
.index-board-earth .index-board-item-inner{
  background: url(../assets/images/3.png) no-repeat;
  background-size:90px 90px;
}
.index-board-hill .index-board-item-inner{
  background: url(../assets/images/4.png) no-repeat;
  background-size:90px 90px;
}
.index-board-item h2 {
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 15px;
}
.line-last {
  margin-right: 0;
}
.index-board-button {
  margin-top: 20px;
}
.lastest-news {
  min-height: 512px;
}
.hot-tag {
  background: red;
  color: #fff;
  padding: 0 5px;
  border-radius: 10px;
}
.new-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
