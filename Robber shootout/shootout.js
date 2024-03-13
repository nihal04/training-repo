const shootout = (num, target, space) =>{
    let count = 0;
    let arr = [];
    let arr2 = [];
    
    for(let i=1; i<=num; i++){
        arr.push(i);
    }

    let temp = arr.indexOf(target);

    const func = () =>{
        arr.forEach((ele, i)=>{
            count = count + 1;
            console.log(`Target = ${arr[temp]}, ${count} shots completed`);
            arr2.push(arr[temp]);
            arr.splice(temp,1);
            let lastIndex = arr.length - 1;
            let inc = temp + space;
            if(inc <= lastIndex && arr.length > space){
                temp = temp + space;
            } else if(inc > lastIndex && arr.length > space){
                temp = (temp + space) - lastIndex - 1;
            } else if(arr.length <= space){
                temp = lastIndex;
            }
        })
    }

    for(let i=0; i<=num; i++){
        func();
    }
    console.log(`${count} shots taken`);
    console.log("The shootout sequence was:", arr2.toString());
}

shootout(10, 2, 3);