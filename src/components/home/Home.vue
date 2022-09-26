
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
    <h1 class="page-header">Dashboard</h1>
    <!-- 组件预留占位 -->
    <dashboard></dashboard>
    <div class="sub-header">Section title</div>
    <!-- 组件预留占位 -->
    <home-list></home-list>
</div>
</template>
<script>
    // 导入文件获取实例对象  注意要写后缀名 否则会报错
import Dashboard from './Dashboard.vue'
import HomeList from './HomeList.vue'

export default{
    // 将对象注册为组件
  components:{
    Dashboard,
    HomeList
  },


  // data(){
  //   return {
    
  //   }

  // }
}
</script>
<style>

</style>