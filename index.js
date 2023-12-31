const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define your API routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const FyersSocket = require("fyers-api-v3").fyersDataSocket

var fyersdata= new FyersSocket("Y4PJ649WNP-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2OTUwMTMwMDQsImV4cCI6MTY5NTA4MzQ0NCwibmJmIjoxNjk1MDEzMDA0LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbEI5aU12Z0w0eUllZHhnSHNkX1NXR1c0czhER0lkeXBiLThtUjNIaEVxY0VEeTN6eVJKLUV0UERqWk5zRnpSMUNEbUVjOFZFTFBmOFVVWnpZOGRsQ1JMQ0JONThTSVNLQkVsOFdGTFZKRUU3WGFzOD0iLCJkaXNwbGF5X25hbWUiOiJLSFVTSFdJTkRFUiIsIm9tcyI6IksxIiwiaHNtX2tleSI6IjY2ZTBiYzM3MmQ4ZWVkMmNkNDdhNmJjNmJmYjY4MzY4MWRlN2Q5ZTg1MGU2YTlhYWI5NjgzMTkyIiwiZnlfaWQiOiJYSzAzNDgxIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.ZOyXv1MP-Gmba9i7aOaMNxSja1UXKFdl9DbhlgVf7gw")

function onmsg(message){
          s = message.symbol
          l = message.ltp
    app.get('/api', (req, res) => {
        res.json({symbol:s, ltp:l});
       
      });
      
      console.log(message);
    }   


function onconnect(){
    fyersdata.subscribe(['NSE:NIFTY50-INDEX']) //not subscribing for market depth data
    // fyersdata.subscribe(['NSE:IDEA-EQ','NSE:BANKNIFTY2392046100CE'],true) //subscribing for market depth
    fyersdata.mode(fyersdata.LiteMode) //set data mode to lite mode
    fyersdata.autoreconnect() //enable auto reconnection mechanism in case of disconnection
}

function onerror(err){
    console.log(err)
}

function onclose(){
    console.log("socket closed")
}

fyersdata.on("message",onmsg)
fyersdata.on("connect",onconnect)
fyersdata.on("error",onerror)
fyersdata.on("close",onclose)

fyersdata.connect()

