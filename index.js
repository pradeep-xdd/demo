const express = require('express')
const app = express();
const port = 3000

function sum(n){
  let s=0;
  for(let i=0;i<n;i++){
    s=s+i;
  }
  return s;
}
app.get('/', function(req, res)  {
  //console.log(req.headers)   // will give all headers parameters 
  // body-parser for body parameters find syntax googling it
  const n=req.query.n;
  const ans= sum(n);
  res.send(ans.toString()) // try it in string or it,ll assume int as ststaus code
})
app.listen(port)