
function askPassword(ok, fail){
    let password = prompt("password?",'');
    if(password == "rockstart") ok();
    else fail();

}

let user = {
    name: 'john',

    loginOk(){
        alert(`${this.name} logged in`);

    },
    loginFail(){
        alert(`${this.name} failed to login`);
    },

};

askPassword(() => user.loginOk.call(user), () => user.loginFail.call(user));