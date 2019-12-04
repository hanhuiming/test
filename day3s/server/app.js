
const express=require('express')
const app=express()
const Router=express.Router()
const bodyParser = require('body-parser')
const fs =require('fs')


const getData=(path)=> new Promise((resolve,reject)=>{
    fs.readFile(path,(err,data)=>{
        if(err){
            reject(err)
            return 
        }
        resolve(JSON.parse(data,toString()))
    })
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Router)


// 搜索接口
Router.post('/search', (req,res)=>{
     console.log(req)
    // console.log(req.body)
    // let {val}=req.body
    // console.log(val)
   
    // let data= await getData('./data/data.json')
    
    //  res.send({
    //     code:1,
    //     mes:"success",
    //     data:data.filter(item=>{
    //         return item.phone.includes(val) || item.name.includes(val) || item.title.includes(val)
    //     })
    // })
})
// 赛选接口

const types=["buyer","like","ok",""]
 
Router.get("/list",async(req,res)=>{
    let data=await getData('./data/data.json')
    fs.writeFileSync("./data/data.json",JSON.stringify(data.map(item=>{
        item.type=types[Math.floor(Math.random()*types.length)]
        return item
    })))
    res.send({
        code:1,
        mes:"success",
        data
    })
})

  
app.listen(3000)
