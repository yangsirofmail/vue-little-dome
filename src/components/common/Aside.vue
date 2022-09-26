
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
    <div class="col-sm-3 col-md-2 sidebar">
        <ul class="nav nav-sidebar">
          <router-link to="/" exact tag="li">  <a >Home</a>  </router-link>
          <router-link to="/crud" exact tag="li"> <a >CRUD</a></router-link>
        </ul>
      </div>
</div>
</template>
<script>

export default{
  data(){
    return {}

  }
}
</script>
<style>

</style>