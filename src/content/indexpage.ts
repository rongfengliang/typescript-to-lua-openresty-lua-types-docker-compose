import myid = require("hashids")
let hashids = myid.new("dalongdemo",15)
ngx.say(hashids.encode(100,200,200))
