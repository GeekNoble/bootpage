import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

var state={         //数据域
	  list:[
        {id:1 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:2 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:3 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:4 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:5 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:6 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:7 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:8 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:9 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:10 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:11 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:12 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:13 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:14 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:15 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:16 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:17 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:18 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:19 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:20 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:21 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:22 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:23 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:24 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:25 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:26 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:27 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:28 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:29 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:30 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:31 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:32 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:33 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:34 , name:"GeekNoble" , content:"前端" , describle:"88899"},
        {id:35 , name:"GeekNoble" , content:"前端" , describle:"88899"}
      ],
      tableList:[], //当前显示的数据
      pageIndex:1,  //当前页码
      pageLength:4,  //显示多少条数据
      totalNum:9,     //总页码
      totalPage:4,     //可见页码个数
      pageNum:[]      //可见页码
};

const actions={   //actions可用异步方法，不建议直接改变store状态
	getData({commit,state},index){   //index为传进来的参数
		if(index<1||index>state.totalNum||isNaN(index)){
			return;
		}
		console.log(index);
		commit('getData',index)
	},

	  //下一页
    nextPage({commit,state}){
      if(state.pageIndex>=state.totalNum){
        return;
      }
    //  state.getData(state.pageIndex+1);
      commit('getData',state.pageIndex+1)
    },
    //上一页
    prevPage({commit,state}){
      if(state.pageIndex==1){
        return;
      }
     // state.getData(state.pageIndex-1);
       commit('getData',state.pageIndex-1)
    },
    //初始化数据和页码
    initNum({commit}){
    	commit('initNum');
    	commit('getData',1);
    }
}

const mutations={
	getData(state,index){
		//获取数据
		//mutations用于修改store状态,即修改state中的数据，且只能为同步方法
		
      state.tableList=[];   //将当前数据清空
      var length=(index-1)*state.pageLength;  //每页的第一条数据
      for(let i=0;i<state.pageLength;i++){
        if(length==state.list.length)
          break;
        state.tableList.push(state.list[length]);
        length++;
      }
      state.pageIndex=index;  //修改当前页
		 //当前可见页码处理
      if((state.pageIndex+Math.floor(state.totalPage/2))>state.totalNum){  //页码到底时
         let k=state.totalNum-state.totalPage;
        for(let j=0;j<state.totalPage;j++){
          k++;
          state.pageNum[j]=k;
        }
      }else if((state.pageIndex-Math.floor(state.totalPage/2))<1){   //页码到顶时
         for(let j=0;j<state.totalPage;j++){
          state.pageNum[j]=j+1;
        }
      }else{
        for(let j=0;j<state.totalPage;j++){
          state.pageNum[j]=(state.pageIndex-Math.floor(state.totalPage/2))+j;
        }
      }
	},
	initNum(state){
      state.totalNum=Math.ceil(state.list.length/state.pageLength);
      for(let i=1;i<=state.totalPage;i++){
        state.pageNum.push(i);
      }
    }
}

const getters={
	tableList(state){
		return state.tableList;
	},
	//ES6简写
	totalNum:state=>state.totalNum,
	pageNum:state=>state.pageNum,
	pageIndex:state=>state.pageIndex
}

//导出Store对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})