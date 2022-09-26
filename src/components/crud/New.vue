
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
       <h2 class="sub-header">添加学生</h2>
       <!-- 给form注册表单提交事件add -->
       <form @submit.prevent="add">
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
  created(){
    console.log(this.$router)
  },
  methods:{
    // 给上面注册的事件 写具体的处理函数
    add(){
      console.log(this.formData)
      /*
      1、注册表单提交事件及处理函数
      2、配置表单验证
      3、收集表单数据
      4、提交表单，发起请求，添加学生
      5、添加成功，跳转回列表页  使用编程式导航来跳转

      */ 
      // 发送异步请求提交fordata的数据 添加学生到db.json
      axios.post('http://127.0.0.1:3000/list',this.formData).then(res=>{
        console.log(res)
        // 通过编程式导航 有很多跳转方法 如go(n) 到指定链接 back后退 自定义参数  详情去vue搜索编程式导航
        // this.$router.back()// 后退
        this.$router.push('/')//去首页
      }).catch(err=>{

      })
    }
  }
}
</script>
<style>

</style>