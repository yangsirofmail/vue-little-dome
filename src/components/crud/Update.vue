
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
       <h2 class="sub-header">编辑学生</h2>
       <!-- 给form注册表单提交事件update -->
       <form @submit.prevent="update">
         <div class="form-group">
           <label for="">姓名</label>
           <!-- v-model="formData.name"用来收集输入框的数据 -->

           <input type="text"
            class="form-control"
             id="" name="name" 
             v-model="formData.name"
             required minlength="2" maxlength="10">
         </div>
       
         <div class="form-group">
           <label for="">年龄</label>
           <!--      v-model.number="formData.age" 用来收集输入框的数据 -->
           <input class="form-control"       
           v-model.number="formData.age"
            type="number" id="" name="age" required min="1" max="150">
         </div>
       
         <button type="submit" class="btn btn-default">Submit</button>
       </form>
</div>
</template>
<script>
  // 导入axios用来发请求
import axios from 'axios'

export default{
  data(){
    return {
      formData:{
        "name":'',
        "age":''
      }
    }
  },
  async created(){
    // console.log(this.$router)//访问到的是路由实例对象
    console.log(this.$route)//访问到的是路由参数对象 也就是当前点击编辑的数据的对象
    //查询当前$route对象的id 并解构赋值 
    const{id}=this.$route.query
//     // 将拿到的id通过get请求查询对应的数据
    const res=await axios.get(`http://127.0.0.1:3000/list/${id}`)
// //将获取到的数据解构赋值到data
    const {data}=res
//     // 打印data对象 完美实现获取到了db.json里面的数据
    console.log(data)

    this.formData=data
  },
  methods:{
    // 给上面注册的事件 写具体的处理函数
   async update(){
      // console.log(this.formData)
      /*
      1、注册表单提交事件及处理函数
      2、配置表单验证
      3、收集表单数据
      4、提交表单，发起请求，添加学生
      5、添加成功，跳转回列表页  使用编程式导航来跳转

      */ 
    //  console.log(this.formData)
     const {id}=this.formData
      // 发送异步请求提交fordata的数据 更新学生数据到db.json
      // 注意patch是更新 put是替换 两者都可以实现编辑数据
    const{data}= await axios.patch(`http://127.0.0.1:3000/list/${id}`,this.formData)
    {
      windows.alert("修改成")
      // 打印发挥的数据 如果是空数组就代表成功
      // console.log(data)
        this.$router.back()// 后退
        // this.$router.push('/crud')//后退
      }
    }
  }
}
</script>
<style>

</style>