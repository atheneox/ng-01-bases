import { Component } from '@angular/core';
import { Character } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  constructor(private dbzService: DBZService) { }

  new: Character = {
    name: 'Maestro Roshi',
    power: 0
  }
  
}
