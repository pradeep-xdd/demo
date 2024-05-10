const express=require("express")
const app=express();
var users=[{
    namee: 'john',
    kidney: [{
        health : false }]
 }]

 app.use(express.json());
 app.get("/",function(req,res){
const johnKidneys= users[0].kidney;// all john kidneys
 const noofkidneys = johnKidneys.length;
 let noofhealthykidney =0;
 for(let i=0;i<johnKidneys.length;i++)
    {
        if(johnKidneys[i].health) // checking healthy ones
            {
                noofhealthykidney=noofhealthykidney +1;
            }
    }
 const noofunhealthykidney=noofkidneys - noofhealthykidney;
 res.json({
    johnKidneys,
    noofkidneys,
    noofunhealthykidney,
    noofhealthykidney
 })
})

app.post("/", function(req,res){
const isHealthy=req.body.isHealthy;
users[0].kidney.push({
    health: isHealthy
})
res.json({
    msg: "isDone"
})
})
app.put("/", function(req,res){
     for(let i=0;i<johnKidneys.lengh;i++)
        {
            johnKidneys[i].health = true;
        }
        res.json({})
    })
    app.delete("/", function(req,res){
        if(unhealty())
            {
      const newkidney=[];
      for(let i=0;i<johnKidneys.lengh;i++)
        {
            if(johnKidneys[i].health){
                newkidney.push({
                    health: true
                })
            }
        }
johnKidneys= newkidney;
res.json(
    {
        msg: "done"
    })}
    else
    res.status(411).json({
msg: "no unhealty pagal h kya"
})
})

function unhealty(){
    let a= false
 for(let i=0;i<users[0].kidney.length;i++)
    {
        if(users[0].kidney[i].health==false){
            a=true}
        }
        return a;
    }

app.listen(3001)