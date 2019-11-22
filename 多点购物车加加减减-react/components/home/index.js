import React, { Component } from 'react'
import {connect} from "react-redux"
import RequestMock from "../../unilt/request"
export default class Home extends Component {
    goDetail=(id)=>{
        this.props.history.push('/detail?id='+id)
    }
    addCart=(e, item)=>{
        e.stopPropagation();
        this.props.addCart(item)
    }
    render() {
         let {list}=this.props
        return (
            <div className="main">
                {
                    list && list.map((item,index)=>{
                        return (
                            <div key={index} className="item" onClick={()=>this.goDetail(item.id)}> 
                                <div className="img">{item.img}</div>
                                <div className="kg">{item.kg}</div>
                                <div className="shuiguo">{item.shuiguo}</div>
                                <div className="price">{item.price}</div>  
                                <button className="add" onClick={(e)=>this.addCart(e, item)}>{item.button}</button>   
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        this.props.getDate()
    }
}

let mapStateToProps=(store)=>{
    let {list,cart}=store
    
    return {
        list,
        cart
    }
}
let mapDispatchToProps=(dispatch)=>{
    return {
        getDate(){
             RequestMock("/api/mock").then((res)=>{
               dispatch({type:"LIST",list:res})
            })
        },
        addCart(item){
           
            dispatch({
                type:"ADD_CART",
                item
            })
        }
    }
}
Home=connect(mapStateToProps, mapDispatchToProps)(Home)
