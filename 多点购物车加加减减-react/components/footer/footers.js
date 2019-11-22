import React, { Component } from 'react'
import {Link} from "react-router-dom"
import {connect} from "react-redux"
export default class Footer extends Component {
    render() {
        return (
             <footer>
                <Link to="/home">配送到家</Link>
                <Link to="/fenlei">分类</Link>
                <Link to="/gouwuche">购物车
                 <span>{this.props.num}</span></Link>
                <Link to="/vip">VIP</Link>
                <Link to="/my">我的</Link>
            </footer>
        )
    }
}
let mapStateToProps=(state)=>{
    // let {cart}=state
    // console.log(cart)
    return{
        num:state.cart.reduce((total,item)=>{
            if(item.checked){
                 total+=item.num
            }
            return total
        },0)
       
    }
}
Footer=connect(mapStateToProps)(Footer)


