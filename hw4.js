//method creation

class ab{
    SayHello(){
        setTimeout(()=>{
            console.log(this.name);
            
        },1000);
    }
}
ab.SayHello();