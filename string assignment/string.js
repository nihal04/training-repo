const stringConvert = (str)=>{
    let val = "";
    for(let i=0; i<str.length; i++){
        if (str[i] >= 'a' && str[i] <= 'z'){
            val = val + String.fromCharCode(str.charCodeAt(i) - 32);
        } else if(str[i] >= 'A' && str[i] <= 'Z'){
            val = val + String.fromCharCode(str.charCodeAt(i) + 32);
        }
    }
    return val;
}

console.log(stringConvert("abcdE"));