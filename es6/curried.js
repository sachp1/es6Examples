

var add= function(...args){
    return args.reduce(function(total,num){
        
        return total+num
    },0)
}


var mult= function(x,y){
    return x*y
}

var logFn=function(fnToBeCalled){
    return function(...args){
        console.log('Arguments',args)
        const result=fnToBeCalled.apply(null,args)
        console.log('result',result)
    }
}

var addWithLog=logFn(add);

addWithLog(10,20,30,100)


var multWithLog=logFn(mult);

multWithLog(10,20)

