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
  arrNews: Inews[] = [
    {
      title:
        'Copa América: Colombia empata contra Brasil y pasa como primero del grupo D',
      date: '2024-07-02',
      image:
        'https://bolavip-co.cms.futbolsitesnetwork.com/wp-content/uploads/sites/20/2024/07/El-gol-de-Daniel-Munoz-a-Brasil-1024x572.jpg',
      alt: 'El colombiano Daniel Muñoz anota y empata contra Brasil',
      content: `Colombia y Brasil protagonizaron uno de los partidos más emocionantes de la fase de grupos de la Copa América. El compromiso terminó en empate 1-1 y dejó al equipo dirigido por Néstor Lorenzo primero y al cuadro brasilero segundo, resultado que no gustó en los aficionados y la prensa de Brasil. O globo, uno de los medios de comunicación más conocidos en Brasil realizó un análisis del partido que hizo su Selección y criticó fuertemente el nivel presentado por los jugadores y el planteamiento del entrenador, clasificándolo como “el peor partido con Dorival”.`,
    },
    {
      title:
        'Euro 2024: Con Polémica España avanza a las semis tras eliminar a Alemania',
      date: '2024-07-05',
      image:
        'https://bolavip.com/co/_next/image?url=https%3A%2F%2Fds-images.bolavip.com%2Fnews%2Fimage%3Fsrc%3Dhttps%253A%252F%252Fimages.bolavip.com%252Fwebp%252Fco%252Ffull%252FBCO_20240706_BCO_90897_Mano-penal-Alemania-Espana.webp%26width%3D740%26height%3D416&w=1920&q=75',
      alt: 'La mano del penal que no le pitaron a Alemania contra España en la Euro 2024',
      content: `España y Alemania cruzaron sus caminos en los cuartos de final de la Euro 2024, con pronóstico reservado. Los anfitriones del torneo tenían una ligera ventaja, por tener el público a favor. Al final, los españoles apagaron la fiesta de los alemanes y los derrotaron 2-1 en tiempo extra. Sin embargo, ese partido quedó bajo la lupa de la crítica por una polémica jugada que hubiese cambiado por completo la historia. Sin embargo, la gran polémica del juego se desató en el primer tiempo extra. A los 105. Jamal Musiala sacó un potente remate de media distancia que iba directo a la portería de España. Ahí fue cuando se atravesó Marc Cucurella para desviar y el balón se terminó estrellando en una de sus manos, dentro del área. Una acción clara para decretar penal a favor de Alemania. La cuestión es que, el árbitro y el VAR pasaron de largo e ignoraron por completo la infracción.`,
    },
  ];

  newNews: Inews = { title: '', date: '', image: '', alt: '', content: '' };

  saveNews() {
    if (
      this.newNews.alt !== '' &&
      this.newNews.content !== '' &&
      this.newNews.date !== '' &&
      this.newNews.image !== '' &&
      this.newNews.title !== ''
    ) {
      this.arrNews.push(this.newNews);
      this.newNews = { title: '', date: '', image: '', alt: '', content: '' };
    } else {
      alert(
        'Para poder añadir una noticia al blog, todos los campos deben ser diligenciados :)'
      );
    }

    console.log(this.arrNews);
  }

  loadNews(): string {
    let html: string = ``;
    this.arrNews.forEach((news: Inews) => {
      html += `
      <div class="entry">
  <h3>${news.title.toUpperCase()}</h3>
  <h4>${news.date}</h4>
  <figure>
    <img class="pic"
      src="${news.image}"
      alt="${news.alt}"
    />
  </figure>
  <p>${news.content}</p>
</div>
      `;
    });
    return html;
  }
}
