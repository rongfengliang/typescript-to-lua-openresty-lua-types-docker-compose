declare module  "resty.ipmatcher" {
    interface IpMatcher {
        match(hashid:string|any):LuaMultiReturn<[true|false|Record<string,string>, string]>;
        match_bin(hashid:any):LuaMultiReturn<[true|false|Record<string,string>, string]>;
    } 
    interface myIpmatcherConstructor {
        new: (this: void,ips:string[]) =>  LuaMultiReturn<[IpMatcher, string]>;
        new_with_value: (this: void,ips:Record<string,any>) => LuaMultiReturn<[IpMatcher, string]>;
        /** @noSelf */
        parse_ipv4(ip:stirng):true|false
        /** @noSelf */
        parse_ipv6(ip:stirng):true|false
    }
    var ipmatcher:myIpmatcherConstructor
    export = {
        ...ipmatcher
    }
}