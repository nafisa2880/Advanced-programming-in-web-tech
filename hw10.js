//promise:

// console.log('start');
// const prom= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         let success=true
// if(success){
//     resolve('done')
// }
// else{
//     reject('not done')
// }
//     }, 2000);
// });

// prom
// .then((message)=> console.log(message))
// .catch((error)=>console.log(error))

//await:

console.log('start');
async function a() {
    await new Promise((resolve)=>{
        setTimeout(() => {
            let sum=0;
            for(i=0;i<1000000000;i++){
                sum+=i
            }
    console.log(sum)
    resolve()
        }, 2000);
    })
}
a()
console.log('end')