import {User} from '../interfaces/user.interface'

export class DbService{
    public renderUsers = async () : Promise<User>=>{
        const uri = 'http://localhost:3004/users';
        const result = await fetch(uri);
        const users = await result.json();
        return users;
    }
}