declare module "hashids" {
    interface Hashids {
        encode(...args: number[]):string
        decode(hashid:string):number[]
    }

    interface myHashidsConstructor {
        new: (this: void, saltKey: string,length?:number) => Hashids;
    }
    var id: myHashidsConstructor
    export = {
         ...id
    }

}