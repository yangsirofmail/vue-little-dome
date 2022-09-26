
  <template>
    <!-- //这个是根组件只能有一个 -->
<div>
  <a class="btn btn-success" href="/students/new">添加学生</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <!-- <th>性别</th> -->
                <th>年龄</th>
                <!-- <th>爱好</th>
                <th>操作</th> -->
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                  <a href="#">编辑</a>
                  <a href="#">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
</template>
<script>

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

  }
}
</script>
<style>

</style>