import { Injectable } from '@nestjs/common';
import fetch from "node-fetch";
import { PrismaService } from 'src/prisma/prisma.service';

interface User {
    name: string,
    firstname: string,
    gender: string,
}

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {};

    async findAll() {
        return this.prisma.user.findMany();
    }

    async getUserRandom() {
        
        const response = await fetch('https://randomuser.me/api/');
  
        const json = await response.json();

        const user: User = {
            name: json.results[0].name.last,
            firstname: json.results[0].name.first,
            gender: json.results[0].gender,
        }

        return await this.prisma.user.create({
            data: {
                firstname: user.firstname, lastname: user.name, gender: user.gender
            },
        });
      
    }
}
