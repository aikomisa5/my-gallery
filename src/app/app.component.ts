import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryThumbnailsComponent} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '400px',
        height: '530px',
        thumbnailsColumns: 8,
        layout: "thumbnails-down",
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
        previewZoom: true,
        previewRotate: true,
        imageDescription: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/bondra.jpeg',
        medium: 'assets/bondra.jpeg',
        big: 'assets/bondra.jpeg',
        description: "Bondra"
      },
      {
        small: 'assets/kimba.jpg',
        medium: 'assets/kimba.jpg',
        big: 'assets/kimba.jpg',
        description: "Kimba"
      },
      {
        small: 'assets/fifo.jpg',
        medium: 'assets/fifo.jpg',
        big: 'assets/fifo.jpg',
        description: "Fifo"
      },
      {
        small: 'assets/nala.jpg',
        medium: 'assets/nala.jpg',
        big: 'assets/nala.jpg',
        description: "Nala"
      },
      {
        small: 'assets/kira.jpg',
        medium: 'assets/kira.jpg',
        big: 'assets/kira.jpg',
        description: "Kira"
      },
      {
        small: 'assets/pelusa.jpeg',
        medium: 'assets/pelusa.jpeg',
        big: 'assets/pelusa.jpeg',
        description: "Pelusa"
      },
      {
        small: 'assets/sultan.jpeg',
        medium: 'assets/sultan.jpeg',
        big: 'assets/sultan.jpeg',
        description: "Sultan"
      },
      {
        small: 'assets/blanquita.jpeg',
        medium: 'assets/blanquita.jpeg',
        big: 'assets/blanquita.jpeg',
        description: "Blanquita"
      }                  
    ];
  }
}

