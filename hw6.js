//spread operator:

// const a=[2,5,2]
// const b=[...a,4]
// console.log(b);

const car={
    name:'BMW',
    color:'red'
}

const modifyCar={
    color: 'green',
    add: 'kuril'
}
const lastUpdate={...car,...modifyCar}
console.log(lastUpdate);

