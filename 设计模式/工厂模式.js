function createPerson(name,job){
    this.name=name;
    this.job=job;
    createPerson.prototype.selfChtrouce=function(p){
        var _this=p||this;
        console.log("我的名字叫:",_this.name,"工作是:",_this.job)
    }
}
var teacher=new createPerson("lisi","teacher");
var student=new createPerson("wangwu","student");
teacher.selfChtrouce();
student.selfChtrouce();
createPerson.prototype.selfChtrouce({name:"aliy",job:"doctor"});
createPerson.prototype.selfChtrouce.call(null,{name:'Bob',job:"driver"})