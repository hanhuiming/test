import {govList,addGov} from "../services"
export default {

  namespace: 'gov',
// 原始数据
  state: {
    list:[],
    type:"",//new 表示新增，eidt 表示编辑，detail 表示详情
    info:{}
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },
//一步操作

  effects: {
    *getGovList({payload},{call,put}){
      let res=yield call(govList,1,2)
      console.log('data...',res)
      yield put({
        type:"changeList",
        payload:res.data.list
      })
    },
    
    * addGov({payload}, {call, put, select}) {
      // 通过select拿到所有的state
      let {type} = yield select(state=>state.gov);
      console.log('type...', type);

      // 通过type判断调哪一个接口
      if (type === 'new'){
        let res = yield call(addGov, payload);
        console.log('res...', res);
      }else if(type === 'edit'){

      }
    }
  },
// 同步操作
  reducers: {
    // save(state, action) {
    //   return { ...state, ...action.payload };
    // },
    changeList(state,{payload}){
      return {...state,list:payload}
    },
    goDetail(state,{payload}){
      let {type,info}=payload;
      return {...state,type,info}
    }
  },

};
