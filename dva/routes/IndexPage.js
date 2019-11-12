import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

 class IndexPage extends React.Component{
  //  constructor(){
  //    super()
  //    this.state={
  //      num:1000
  //    }
  //  }
  render(){
    let {changeNum}=this.props
    console.log(changeNum)
      return (
        <div className={styles.normal}>
          <h1 className={styles.title}>Yay! Welcome to dva!</h1>
          <div>
            <button onClick={()=>{this.props.changeNum("-")}}>-</button>
            <span>{this.props.num}</span>
            <button onClick={()=>{this.props.changeNum("+")}}>+</button>
          </div>
        </div>
      )
  }

}

IndexPage.propTypes = {
  num:Number
};
IndexPage.defaultProps={
  num:10000
}

let mapStateToProps=(state)=>{
  return {
    num:state.num.num
  }
}
let mapDispatchToProps=(dispatch)=>{
  return{
      changeNum:type=>dispatch({
        // console.log(1122)
        type:"num/changeNum",
        payload:{type}
      })
      // changeNum(){
      //   dispatch({type:"num/changeNum", payload:"type"})
      // }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IndexPage);
