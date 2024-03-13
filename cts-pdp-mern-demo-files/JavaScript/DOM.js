const element = document.createElement('h2');
element.innerText = 'Welcome to JavaScript';
const container = document.getElementById('div1');
container.appendChild(element);

const countries = ['India', 'Australia', 'England', 'Russia', 'China'];
countries.map(country => {
    const item = document.createElement('li');
    item.innerText = country;
    document.getElementById('list').appendChild(item);
});

