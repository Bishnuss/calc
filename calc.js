function display(num){
    result.value+=num
}
function allclear(){
    result.value=""
}
function evaluateexp(){
    // currentExp=result.value    length kooduthal
    // result.value=eval(currentExp)

    result.value=eval(result.value)        //length kuravu
}

function backspace(){
    // data=result.value       length kooduthal
    // s=data.slice(0,-1)
    // result.value=s


    result.value=result.value.slice(0,-1)            //length kuravu
}