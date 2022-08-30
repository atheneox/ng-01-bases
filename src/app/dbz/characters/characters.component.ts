import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent {

  // @Input('data') characters: any = [];
  // @Input() characters: Character[] = [];                         

  get characters() {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DBZService) { }

}


