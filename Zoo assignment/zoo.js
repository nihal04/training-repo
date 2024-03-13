const getCount = (val, arr) =>{
    let count = 0;
    arr.forEach((item)=>{
        if(val === item){
            count = count + 1;
        }
    })
    return count;
}

const zooFunc = (str) => {
    let arr = str.split("");
    if(arr.length <= 20){
        let uniqArr = arr.filter((ele, i)=> arr.indexOf(ele)=== i);
        if(uniqArr.length===2){
            let countX = getCount(uniqArr[0], arr);
            let countY = getCount(uniqArr[1], arr);
            if(countY === 2*countX || countX === 2*countY){
                console.log("Yes");
            } else console.log("No");
        } else console.log("Invalid input !");
    } else console.log("Invalid input. The maximum length of word must be 20");
}

zooFunc("zzoooo");