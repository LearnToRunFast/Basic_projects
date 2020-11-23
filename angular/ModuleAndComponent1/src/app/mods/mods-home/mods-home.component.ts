import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal = false;
  items = [
    { title: 'The sky', content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolor harum tempore adipisci, aliquam, quidem officia ipsum voluptatibus voluptas ratione corrupti cum at! Voluptates eum molestiae neque maiores similique voluptatibus!"},
    { title: "The sea", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, est unde debitis quasi culpa nihil nemo commodi sapiente reprehenderit mollitia incidunt saepe quos, hic beatae officiis? Optio, voluptatibus! Tempora, dolore."},
    { title: "The ocrean", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore aliquam a rem corporis temporibus dolor, alias commodi fugit modi, rerum repellat quas natus quia, assumenda ipsam incidunt sit fugiat deserunt."}
  ]
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.showModal = !this.showModal;
  }

}
