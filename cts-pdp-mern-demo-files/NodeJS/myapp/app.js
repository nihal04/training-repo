const lodash = require('lodash');
const user = require('./user');
const arr = [14, 12, [76, 16, 18], [9, 87, 65], 15];
console.log(lodash.flatten(arr));
const str = 'welcome to my application';
console.log(lodash.upperCase(str));
console.log(user.sayNamaste('Dhiraj'));
console.log(user.person);