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
        height: '400px',
        thumbnailsColumns: 5,
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
        small: 'assets/bondra.jpg',
        medium: 'assets/bondra.jpg',
        big: 'assets/bondra.jpg',
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
      }      
    ];
  }
}

