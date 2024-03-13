const getItems = () => {
    fetch('http://localhost:3001/todos')
        .then(res => res.json())
        .then(data => {
            data.map(item => {
                const elem = document.createElement('li');
                elem.className = 'list-group-item';
                elem.innerHTML = `${item.text} <button onclick="deleteItem('${item.id}')" class="btn btn-danger btn-sm float-end">X</button>`;
                document.getElementById('todolist').appendChild(elem);
            })
        });
}

const addItem = () => {
    fetch('http://localhost:3001/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: document.getElementById('todoItem').value,
            isCompleted: false
        })
    }).then(res => res.json())
        .then(data => console.log(data));
}

const deleteItem = (id) => {
    fetch(`http://localhost:3001/todos/${id}`,{
        method: 'DELETE'
    })
}

getItems();