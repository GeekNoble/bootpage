<template>
  <div id="app">
   <div class="table-responsive ta">
     <table class="table table-bordered table-hover">
      <thead>
         <tr >
          <th class="text-center">id</th>
          <th class="text-center">name</th>
          <th class="text-center">content</th>
          <th class="text-center">describle</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableList">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.content}}</td>
          <td>{{item.describle}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">
            <page></page>
          </td>
        </tr>
      </tfoot>
     </table>
   </div>
  </div>
</template>

<script>
import page from './components/page'
import {mapGetters} from 'vuex'
export default {
  components:{
    page
  },
  data(){
    return {
     // tableList:[]
    }
  },
  computed:mapGetters([
      'tableList'
    ])
  ,
  methods:{
    getData(data){
      this.tableList=data;  //接收子组件传来的数据
    },
    initNum(){
      return this.$store.dispatch('initNum');
    }
  },
  mounted(){
    
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ta{
  width: 80%;
  margin:auto;
}

</style>
