import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent {

  @Input() new: Character = {
    name: '',
    power: 0
  }

  constructor(private dbzService: DBZService) {

  }

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();
  add() {

    if (this.new.name.trim().length === 0) { return; }

    console.log(this.new);
    this.dbzService.add(this.new);
    
    // this.onNewCharacter.emit(this.new);

    this.new = {
      name: "",
      power: 0
    }

  }
}
