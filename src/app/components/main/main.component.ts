import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Inews } from '../../interfaces/inews.interface';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  arrNews: Inews[] = [];
  newNews: Inews = { title: '', date: '', image: '', content: '' };

  saveNews() {}
}
