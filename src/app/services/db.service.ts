import {User } from "../type/user.type"

export class DbService{
    public getUsers = async () : Promise<User>=>{
        const uri = 'http://localhost:3004/users';
        const result : Response = await fetch(uri);
        const users = await result.json();
        return users;
    }

    public async createUser(newUser: User){
        const uri = 'http://localhost:3004/users';
        
        fetch(uri, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
    }

    public async getUserById(id: number) : Promise<User>{
        const uri = 'http://localhost:3004/users/' + id;
        const result : Response = await fetch(uri);
        const users = await result.json();
        return users as User;
    }
}