"use strict";

class UserStorage{
    static #users = {
        id: ["mj", "cy", "hw", "hy", "jw", "jb"],
        psword: ["123456","1234", "1234", "1234", "1234", "1234"],
        name:["미정", "창열", "현욱", "학영", "재원", "준범"]
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers =  fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        console.log(newUsers);
        return newUsers;  
    }
}

module.exports  = UserStorage;  