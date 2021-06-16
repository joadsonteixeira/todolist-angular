import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist-angular';
  list = ['Jantar'];
  entrada='';

  adicionar(){
    this.list.push(this.entrada);
    this.entrada='';
  }

  remover(x:number){
    this.list.splice(x, 1);
  }
}
