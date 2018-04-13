import Mock from 'mockjs'
//mockjs作用生成随机数据，拦截ajax请求(详见官方文档)


//第一个参数是正则  后面是规则，用来匹配返回数据
 Mock.mock(/getNewsList/,{
    //会生成10份
    'list|10':[
        {
            url:'@url',  //随机生成url
            title:'@ctitle()' //随机生成中文字符

        }
    ]
})
//订单列表
Mock.mock(/getOrderList/,{
    "orderlist|8": [
        {
            orderId:'@natural',
            product:'@ctitle(2,8)',
            version:'@ctitle(2,4)',
            period:'一年',
            date:'@date("yyyy-MM-dd")',
            buyNum:'@integer(1, 5)',
            amount:'@integer(100, 1000)'

        }
    ]
})
//随机生成轮播图数据模板
Mock.mock(/getSlides/,[
    {
        src:'/static/images/pic1.jpg', 
        href:'detail/analysis',
        title:'@ctitle(4,12)',
        ky:1,
        tokey: 'analysis'
    },
    {
        src:'/static/images/pic2.jpg',
        href:'detail/count',
        title:'@ctitle(4,12)',
        ky:2,
        tokey: 'count'
    },
    {
        src:'/static/images/pic3.jpg',
        href:'detail/forecast',
        title:'@ctitle(4,12)',
        ky:3,
        tokey: 'publis'
    },
    {
        src:'/static/images/pic4.jpg',
        href:'detail/forecast',
        title:'@ctitle(4,12)',
        ky:4,
        tokey: 'forecast'
    }
])


Mock.mock(/getPrice/,{
    "number|100-1000": 500
  })

Mock.mock(/createOrder/,{
    "orderId|10-100": 100
})




  
// export default {
//     tdata
// }