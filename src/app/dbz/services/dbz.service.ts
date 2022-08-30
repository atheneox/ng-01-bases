import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DBZService {

    private _characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        }, {
            name: 'Vegeta',
            power: 7500
        }
    ]

    get characters(): Character[] {
        return [...this._characters];
    }

    add(character: Character) {
        this._characters.push(character);
    }

    constructor() { }

}