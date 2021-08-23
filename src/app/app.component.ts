import { Component } from '@angular/core';
import { Link } from './models/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProd4GL';
  listeLien : Link[] = [
    {url : 'details', title : 'Liste de Fans', icon: 'people'},
    {url : 'create', title : 'Ajouter', icon: 'person_add'},
    {url : 'update', title : 'Mettre à jour', icon: 'update'}
  ]
}
