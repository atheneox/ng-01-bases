import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent {

  heros: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán America '];
  herosDeleted: string[] = [];

  deleteHero(index: number) {
    const hero: string = this.heros.splice(index, 1)[0];
    if (hero.length > 0) {
      this.herosDeleted.push(hero);
    }
  }

}

