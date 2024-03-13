var items = ['Item1', 'Item2'];

const AddItem = (item) => {
    return new Promise((resolve, reject) => {
        let isError = false;
        setTimeout(() => {
            if (!isError) {
                items.push(item);
                resolve();
            } else {
                reject('Error occurred');
            }
        }, 3000);
    })
}

const GetItems = () => {
    items.map(x => console.log(x));
}

// AddItem('Item3')
//     .then(GetItems)
//     .catch(err => console.log(err));

const RunTasks = async () => {
    // console.log('Loading...');
    await AddItem('Item3');
    GetItems();
}

// await Promise.all([AddItem, Func1])

RunTasks();

// const p = new Promise((resolve, reject) => {

// })

const getUsers = () => {
    fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => console.log(data));
}

getUsers();
