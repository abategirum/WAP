const user= {
    firsname: 'john',
    sayHi:function(){
        console.log(`${this.firstname} says hi`);
    
    }
}
//this keyword inside a function referce to the window object but inside a method it referece to that object;
setTimeout(() => user.sayHi,3000);//wrappper

setTimeout(() => user.sayHi.call(user),3000);//using call

setTimeout(() => user.sayHi.apply(user),3000);//using apply

setTimeout(user.sayHi.bind(user),3000);//using bind... bind returns another function

