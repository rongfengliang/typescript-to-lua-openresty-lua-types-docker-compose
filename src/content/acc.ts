
import ipmatch = require("resty.ipmatcher")

let ips = {
    "192.168.17.101":{
       info:"demo"
    },
    "192.168.17.102": {
        info:"test"
    }
}

let ipv4 = ipmatch.parse_ipv4("127.0.0.1")

console.log(ipv4)

let [ip2, err2] = ipmatch.new_with_value(ips)

if (err2) {
    ngx.say(err2)
    ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
}


let [ok2, errMsg2] = ip2.match("192.168.17.102")

if (errMsg2) {
    ngx.say(errMsg2)
    ngx.exit(ngx.HTTP_INTERNAL_SERVER_ERROR)
}
if (ok2) {
    if(typeof ok2 === "object") {
        ngx.say("is match ",ok2.info)
    }
    if(typeof ok2 ==="boolean") {
        ngx.say("is match ")
    }
}