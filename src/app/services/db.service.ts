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
        await fetch(uri, {
            method: 'POST',
            body: JSON.stringify(newUser)
        });
    }

    public async getUserById(id: number) : Promise<User>{
        const uri = 'http://localhost:3004/users/' + id;
        const result : Response = await fetch(uri);
        const users = await result.json();
        return users as User;
    }
}