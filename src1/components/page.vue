<template>
	<div class="clearfix">
   
		<nav aria-label="Page navigation" class="pull-right">
			<ul class="pagination">
				<li>
					<a href="#" aria-label="Previous" @click="getData(1)">
						<span aria-hidden="true">首页</span>
					</a>
				</li>
				<li>
					<a href="#" aria-label="Previous" @click="prevPage()">
						<span aria-hidden="true">上一页</span>
					</a>
				</li>
				<li v-for="item in pageNum" :class="{active:item==pageIndex}">
					<a href="javascript:void(0)"  @click="getData(item)">
						{{item}}
					</a>
				</li>
				<li>
					<a href="#" aria-label="Previous" @click="nextPage()">
						<span aria-hidden="true">下一页</span>
					</a>
				</li>
				<li>
					<a href="#" aria-label="Next" @click="getData(totalNum)">
						<span aria-hidden="true">尾页</span>
					</a>
				</li>
			</ul>
		</nav>
     <div class="pull-right">
      <form class="form-inline" >
        <div class="form-group" style="margin:25px 30px 0 0">
          <label >第</label>
          <input type="text" v-model.lazy="query" @keydown.enter="test(query)" class="form-control input-sm" style="width: 60px;height: 25px">
          <label >页</label>
          <label >共{{totalNum}}页</label>
        </div>
      </form>
    </div>
	</div>
</template>

<script type="text/javascript">
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  data(){
    return {
      query:''
    }
      /*
      list:[
        {id:1 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:2 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:3 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:4 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:5 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:6 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:7 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:8 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:9 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:10 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:11 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:12 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:13 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:14 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:15 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:16 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:17 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:18 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:19 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:20 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:21 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:22 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:23 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:24 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:25 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:26 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:27 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:28 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:29 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:30 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:31 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:32 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:33 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:34 , name:"ddd" , content:"fff" , remark:"88899"},
        {id:35 , name:"ddd" , content:"fff" , remark:"88899"}
      ],
      tableList:[], //当前显示的数据
      pageIndex:1,  //当前页码
      pageLength:4,  //显示多少条数据
      totalNum:9,     //总页码
      totalPage:4,     //可见页码个数
      pageNum:[]      //可见页码
    }
    */
  },
  computed:mapGetters([
          'tableList',  //将this.tableList映射为this.$store.dispatch('tableList')
          'totalNum',
          'pageNum',
          'pageIndex'
       ])
  ,
  watch:{
    query(index){
      let id=parseInt(index)
       this.getData(id);
    }
  },
  methods:{
    /*
    mapActions([
          'nextPage',   //将this.nextPage()映射为this.$store.dispatch('nextPage')
          'prevPage',
          'getData',
          'initNum'
      ])*/
      nextPage(){
        //由于有this所以不能使用箭头函数
        return this.$store.dispatch('nextPage');
      },
      prevPage(){
        return this.$store.dispatch('prevPage');
      },
      getData(index){
        return this.$store.dispatch('getData',index);
      },
      initNum(){
        return this.$store.dispatch('initNum');
      },
      test(data){
        console.log(data);
      }
}
    /*
    getData(index){
      //获取数据
      //这里就用准备好的假数据this.list,实际项目中应使用ajax去请求
      this.tableList=[];   //将当前数据清空
      var length=(index-1)*this.pageLength;  //每页的第一条数据
      for(let i=0;i<this.pageLength;i++){
        if(length==this.list.length)
          break;
        this.tableList.push(this.list[length]);
        length++;
      }
      this.pageIndex=index;  //修改当前页
     
      //当前可见页码处理
      if((this.pageIndex+Math.floor(this.totalPage/2))>this.totalNum){  //页码到底时
         let k=this.totalNum-this.totalPage;
        for(let j=0;j<this.totalPage;j++){
          k++;
          this.pageNum[j]=k;
        }
      }else if((this.pageIndex-Math.floor(this.totalPage/2))<1){   //页码到顶时
         for(let j=0;j<this.totalPage;j++){
          this.pageNum[j]=j+1;
        }
      }else{
        for(let j=0;j<this.totalPage;j++){
          this.pageNum[j]=(this.pageIndex-Math.floor(this.totalPage/2))+j;
        }
      }

      this.$emit('tableData',this.tableList);  //将this.tableList传递给父组件
    },
    //下一页
    nextPage(){
      if(this.pageIndex>=this.totalNum){
        return;
      }
      this.getData(this.pageIndex+1);
    },
    //上一页
    prevPage(){
      if(this.pageIndex==1){
        return;
      }
      this.getData(this.pageIndex-1);
    },
    initNum(){
      this.totalNum=Math.ceil(this.list.length/this.pageLength);
      for(let i=1;i<=this.totalPage;i++){
        this.pageNum.push(i);
      }
    }
    */
   
  ,
  mounted(){
    this.initNum();
   // this.getData(3);
  }
}
</script>