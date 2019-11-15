import React, { Component } from 'react'
import { connect } from 'dva'
const mapStateToProps=state=>{
  return {
    type:state.gov.type,
    info:state.gov.info
  }
}
@connect(mapStateToProps)
 class NewGov extends Component {
 
  render() {
     console.log('props...', this.props)
    return (
      <>
        <p>新增机构</p>
      </>
    )
  }
}
export default NewGov

