var a=10;
var obj={
    a:20,
    f:function(){
        console.log(this.a)
    },
    t:()=>{
        console.log(this,this.a)
    }
}
obj.f()
var t=obj.t;
t();