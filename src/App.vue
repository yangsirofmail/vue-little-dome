<template>

<div id="app">
    <!-- //给上面的navbar占位 -->
<app-navbar></app-navbar>
<div class="container-fluid">
<div class="row">
    <!-- //给上面的Aside组件占位 -->
    <app-aside></app-aside>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

        <!--路由出口-->
        <router-view></router-view>
    </div>
</div>

</div>

</div>

</template>
<script>
import AppNavbar from './components/common/Navbar.vue'
import AppAside from './components/common/Aside.vue'
// 导出组件对象
    export default{
// 注册为组件
  components:{
    AppNavbar,
    AppAside
  }
    }
</script>
<style></style>