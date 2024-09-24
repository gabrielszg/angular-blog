import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {
  photoCover: string = "https://wallpapercat.com/w/full/3/3/d/319908-1920x1080-desktop-1080p-iron-man-background.jpg";
  contentTitle: string = "MINHA NOTICIA";
  contentDescription: string = "Ola Mundo";

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      console.log(value.get("id"))
    );
  }
}
