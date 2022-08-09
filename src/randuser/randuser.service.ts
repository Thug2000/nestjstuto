import { HttpStatus, Injectable } from '@nestjs/common';
import fetch from "node-fetch";

interface Name {
    readonly name: string;
}

interface User {
    name: string,
    firstname: string,
    gender: string,
}

@Injectable()
export class RanduserService {
    private names: Name[] = [
        {name: "marie"},
        {name: "tugdual"},
        {name: "herve"},
        {name: "segolene"},
        {name: "aimery"},
        {name: "paul"},
        {name: "guillemette"},
    ];

    async getRanduserName(): Promise<string> {
        const i = Math.floor(Math.random() * (this.names.length));
        const randName = this.names[i].name;
        return randName;
    }

    async getUserFromUrl(): Promise<User> {
        
            const response = await fetch('https://randomuser.me/api/');
      
            const json = await response.json();

            const user: User = {
                name: json.results[0].name.last,
                firstname: json.results[0].name.first,
                gender: json.results[0].gender,
            }

            return user;
          
        }
    
}
