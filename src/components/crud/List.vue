
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
  <router-link class="btn btn-success" to="/crud/new">添加学生</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>年龄</th>
                <!--
                  <th>性别</th>
                <th>爱好</th>
                <th>操作</th> -->
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in list" >
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>
                  <router-link :to="`/crud/update?id=${item.id}`">编辑</router-link>
                  <a @click.prevent="deleteById(item.id)" href="#">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
</template>
<script>
  // 导出axios插件
  import axios from 'axios'

export default{
  data(){
    return {
      list:[
       {
        id:1,
        name:'jack',
        age:18
       }
      ]
    }

  },
/*
json-server 默认开的服务以及在服务端处理了跨域问题
他会在响应头加一个字段 Access-Control-Allow-Origin
这个字段的含义就是允许浏览器跨域请求这个资源 
*/ 

/* axios是异步请求 这个是异步默认写法
 声明钩子
created(){
    //  then表示返回后的回调函数 res就行返回的参数 
    axios.get('http://127.0.0.1:3000/list').then(res=>{
      // console.log(res)
      // 当前实例包含data 请求响应后的res也包括data赋值即可
      this.list=res.data
    })
  }
*/
//高级方式写法  这个跟上面的效果一样
/* 这行时候es6的写法  新特性 async 和await 会把所有的异步函数当成同步函数使用 两者缺一不可
 也就是加了这两个关键字 的异步函数 ，会在发送请求是停止，等待响应返回后继续执行
 而不是传统的发送请求后 执行其他任务 在内部写回调进行传参带回来在执行*/
 async created(){
  // 调用封装后的新特性方法
  this.loadList()
},
methods:{
  //  axios是异步请求 这个是新特性 同步的方式操作异步请求 将拿到的数据返回赋值给res
  async loadList(){
  const res= await axios.get('http://127.0.0.1:3000/list')
      // 当前实例包含data 请求响应后的res也包括data赋值即可
      // this.list=res.data
      console.log("111")
},

//   1、绑定注册删除事件处理函数
    // @click.prevent="deleteById(item.id)"
// 2、发起请求删除数据
// 3、根据响应结果处理
deleteById(id){

 if(!window.confirm("确认删除吗？"))
 {
  return
 }
  //  axios删除用delete方法 返回空对象表示删除成功
  axios.delete(`http://127.0.0.1:3000/list/${id}`).then(res=>{
    this.loadList()
  })
}
}

}
</script>
<style>

</style>
