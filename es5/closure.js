function setAWB_v1(value){
    var awb=value

    console.log("AWB value ",awb)

}

setAWB_v1('222-2222211')


function setAWB_v2(value){
    var awb=value

    function print(){
        console.log("AWB value ",awb)
    }
    
    print()
}

setAWB_v2('134-3232244')

function setAWB_v3(value){

    var awb=value

    function print(){
        console.log("AWB value ",awb)
    }
    
    return print
}


var printFnRef=setAWB_v3('034-1111111')
printFnRef();