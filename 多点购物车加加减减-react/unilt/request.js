import mock from "../mock/mock"
function RequestMock (url){
    return new Promise((res)=>{
        setTimeout(()=>{
             res(mock[url]())
        },1000)
    })
}
export default RequestMock