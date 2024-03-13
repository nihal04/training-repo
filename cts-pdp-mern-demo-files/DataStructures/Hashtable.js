class HashTable {
    constructor(size = 50) {
        this.table = new Array(size);
        this.size = size;
    }

    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }

    set(key, value) {
        const index = this.hash(key);
        const container = this.table[index];
        if (!container) {
            this.table[index] = [[key, value]];
        } else {
            const sameKeyItem = container.find((item) => item[0] === key);
            if (sameKeyItem) {
                sameKeyItem[i] = value;
            } else {
                container.push([key, value]);
            }
        }
        // this.table[index] = value;
    }

    get(key) {
        const index = this.hash(key);
        const container = this.table[index];
        if (container) {
            const sameKeyItem = container.find((item) => item[0] === key);
            if(sameKeyItem){
                return sameKeyItem[1];
            }
        }
        return undefined;
    }

    remove(key) {
        const index = this.hash(key);
        this.table[index] = undefined;
    }

}

const table = new HashTable();
// console.log(table.hash("name"));
// console.log(table.hash("mane"));
table.set("name", "Dhiraj");
table.set("mane", "John");

// table.set("city", "New Delhi");
// table.set("country", "India");

console.log(table);

console.log(table.get("mane"));

// let person = {
//     name: "Dhiraj",
//     city: "New Delhi",
//     email: "Dhiraj.Kumar@niit.com"
// }

// console.log(Object.keys(person));
