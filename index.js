const FyersSocket = require("fyers-api-v3").fyersDataSocket

var fyersdata= new FyersSocket("Y4PJ649WNP-100:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhcGkuZnllcnMuaW4iLCJpYXQiOjE2OTQ5NDg4NzksImV4cCI6MTY5NDk5NzA1OSwibmJmIjoxNjk0OTQ4ODc5LCJhdWQiOlsieDowIiwieDoxIiwieDoyIiwiZDoxIiwiZDoyIiwieDoxIiwieDowIl0sInN1YiI6ImFjY2Vzc190b2tlbiIsImF0X2hhc2giOiJnQUFBQUFCbEJ0NFBVekJic2EzWnBZdWEtR2xSYmlaR3JDdmFROTRMSmxjMjdEQTB5b2lOTEZjZUpmLWZ4QkVmTEs0dGxpYTdhaTJKNDFzWEtqUVM1MGNoVGtmS3VlbUF5c1l1QVFqdjBfeGJYTEFIWGZEV1AxRT0iLCJkaXNwbGF5X25hbWUiOiJLSFVTSFdJTkRFUiIsIm9tcyI6IksxIiwiaHNtX2tleSI6IjY2ZTBiYzM3MmQ4ZWVkMmNkNDdhNmJjNmJmYjY4MzY4MWRlN2Q5ZTg1MGU2YTlhYWI5NjgzMTkyIiwiZnlfaWQiOiJYSzAzNDgxIiwiYXBwVHlwZSI6MTAwLCJwb2FfZmxhZyI6Ik4ifQ.h_qe0a-p_kDdjQIPHNUzc0NRHrWPg2mNs9CmO1Y3-WA")

function onmsg(message){
    console.log(message)
    }


function onconnect(){
    fyersdata.subscribe(['NSE:NIFTY50-INDEX','NSE:TCS-EQ','NSE:BANKNIFTY2392046100CE']) //not subscribing for market depth data
    fyersdata.subscribe(['NSE:IDEA-EQ','NSE:BANKNIFTY2392046100CE'],true) //subscribing for market depth
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

