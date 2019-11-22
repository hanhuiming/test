import React, { Component } from 'react'
import {connect} from "react-redux"
export default class Cart extends Component {
    changeChecked=(id)=>{
        this.props.changeChecked(id)
        
    }
    changeAll=(e)=>{
        this.props.changeAll(e.target.checked)
        console.log(e.target.checked)
    }
    get totalPrice(){
        let pirce=this.props.cart.reduce((total,item)=>{
            if(item.checked){
                total+=item.pirce*item.num
            }
            return total
        },0)
        return pirce.toFixed(2)
    }
    render() {
         let {cart} = this.props;
        return (
            <div className="main">
                 <header>
                    <p>刘于 13683599888</p>
                    <p>送至：北京八维教育软工学院 网站</p>
                </header>
                {/* checked={cart.every(item=>{item.checked})} */}
                <p>
                    <input type="checkbox" checked={cart.every(item=>{item.checked})}  onChange={e=>this.changeAll(e)}/>
                    多点超市（百旺店）
                </p>
               <ul>
                   {
                       cart.map((item,index)=>{
                           return (
                               <li key={index}>
                                   <input type="checkbox" checked={item.checked} onChange={()=>this.changeChecked(item.id)}/>
                                   <div>
                                        <div className="img">{item.shuiguo}</div>
                                        <p>{item.shuiguo}</p>
                                        <p>${item.pirce}</p>
                                        
                                   </div>
                                 <div>
                                     <button onClick={()=>{this.props.reducerClick(item)}}>-</button>
                                     <span>{item.num}</span>
                                     <button  onClick={()=>{this.props.addClick(item)}}>+</button>
                                 </div>
                               </li>
                              
                           )
                       })
                   }
               </ul>
               <p>总价：{this.totalPrice}</p>
            </div>
        )
    }
}
let mapStateToProps=(store)=>{
    let {cart}=store
  
    return {
        cart
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        reducerClick(item){
            // console.log(item,"我是--")
            dispatch({
                type:"REDUCER",item
            })
        },
         addClick(item){
            //    console.log(item,"我是++")
            dispatch({
                type:"ADD",item
            })
        },
        changeChecked(payload){
            dispatch({type:"CHANGECHECKED",payload})
        },
        changeAll(payload){
             dispatch({type:"CHANGE_ALL",payload})
        }
    }
}
Cart=connect(mapStateToProps, mapDispatchToProps)(Cart)
