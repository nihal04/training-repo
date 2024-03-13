const fs = require('fs');

// const data = fs.readFileSync('Textfile.txt');
// console.log(data.toString());

// fs.readFile('Textfile.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// fs.writeFileSync('SampleFile.txt', 'Hi, This is written by nodejs', 'utf-8');
// console.log('File written successfully');

fs.writeFile('SampleFile.txt', 'Hello, Welcome Back!', 'utf-8', (err) => {
    if (!err) {
        console.log('File written successfully');
    }
});

fs.readFile('Source.txt', (err, data) => {
    if (!err) {
        fs.writeFile('Destination.txt', data, (err) => {
            if(!err){
                console.log('Success');
            }
        })
    }
});