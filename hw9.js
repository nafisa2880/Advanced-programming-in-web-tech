//timeout

console.log('start');

function a(){
    setTimeout(()=>{
        let sum=0;
        for(i=0;i<1000000000;i++){
            sum=sum+i
    }
   
    
    console.log(sum)
},2000);
}
a()
console.log('End')
