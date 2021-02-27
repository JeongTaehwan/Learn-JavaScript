// Object -> JSON (Stringify)

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const Goblin = {
    name: 'blan',
    color: 'green',
    size: null,
    birthDate: new Date(),
    hunt: () => {
        console.log(`${this.name} can hunt the money!`);
    },
};

json = JSON.stringify(Goblin);
console.log(json);

json = JSON.stringify(Goblin, ['name', 'color']);
console.log(json);

json = JSON.stringify(Goblin, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key ===  'name' ? 'Puwan' : value;
}); 
console.log(json);

//JSON -> Object (Parse)

json = JSON.stringify(Goblin);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
Goblin.hunt();

console.log(Goblin.birthDate.getDate());
console.log(obj.birthDate.getDate());