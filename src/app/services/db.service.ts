import {User } from "../type/user.type"

export class DbService{
  // TODO: Use method instead of array function as a property
    public getUsers = async () : Promise<User>=>{
      // TODO: Move http://localhost:3004 into base URL constant (or .env config)
        const uri = 'http://localhost:3004/users';
        // TODO: Wrap fetch => json into private function and reuse at other public methods
        const result : Response = await fetch(uri);
        const users = await result.json();
        return users;
    }

    // TODO: Add response type
    // TODO: Remove async or add await within function body
    public async createUser(newUser: User){
        const uri = 'http://localhost:3004/users';
        
        fetch(uri, {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
          // TODO: Check if we really need to set charset here 
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