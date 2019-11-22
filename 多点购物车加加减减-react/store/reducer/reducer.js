let initState={
    list:[],
    cart:[]
}
function Reducer(state=initState,action){
     state = JSON.parse(JSON.stringify(state));
    if(action.type==="LIST"){
        state.list=action.list
    }

    if(action.type==="ADD_CART"){
        //这边接受item，那边传递item
        let index = state.cart.findIndex(item=>item.id==action.item.id);
        if( index === -1){
           
            action.item.num=1
            state.cart.push(action.item)
        }else{
            state.cart[index].num++
        }
    }
    if(action.type==="ADD"){
        let index=state.cart.findIndex(item=>item.id===action.item.id
        )
        
        state.cart[index].num++
    }
    if(action.type==="REDUCER"){
        let index=state.cart.findIndex(item=>item.id=action.item.id)
        state.cart[index].num--
        if(state.cart[index].num<1){
            state.cart.splice(index,1)
        }
    }
    if(action.type==="CHANGECHECKED"){
        let index=state.cart.findIndex(item=>item.id===action.payload)
        state.cart[index].checked=!state.cart[index].checked
    }
     if(action.type==="CHANGE_ALL"){
       state.cart.forEach(item=>{
           item.checked=action.payload
       })
    }
    return {...state}
    
}
export default Reducer