import VueRouter from 'vue-router'
// 导入模块
import Home from './components/home/Home.vue'
// 列表模块
import CrudList from './components/crud/List.vue'
// 添加模块
import CrudNew from './components/crud/New.vue'
// 编辑模块
import CrudUpdate from './components/crud/Update.vue'
//  创建路由实例对象  传入对应的局部组件模板和路径 path是自定义路径  component是模板路径
// 然后导出配置好的实例
export default new VueRouter({
    // 配置高亮
linkActiveClass:'active',

routes:[
    {
        path:"/",
        component:Home
    },
{
    path:"/crud",
    component:CrudList
},
{
    path:"/crud/new",
    component:CrudNew
},
{
    path:'/crud/update',
    component:CrudUpdate
  }
  
  
]})
