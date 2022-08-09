import { Injectable } from '@nestjs/common';

interface Name {
    readonly name: string;
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

    async getRanduserName(): Promise<Name> {
        const i = Math.floor(Math.random() * (this.names.length));
        const randName = this.names[i];
        return randName;
    }
}
