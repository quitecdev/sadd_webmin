import { Component, OnInit } from '@angular/core';
import { PDFDocument, PDFImage } from 'pdf-lib';
import * as FileSaver from 'file-saver';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {


  paginaSelect = [
    {
      "pagId": 6099943,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_1.jpg",
      "pagNombre": "Pagina_1.jpg",
      "pagOrden": 1,
      "pagTamano": 159065,
      "isSelected": true
    },
    {
      "pagId": 6099944,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_2.jpg",
      "pagNombre": "Pagina_2.jpg",
      "pagOrden": 2,
      "pagTamano": 125175,
      "isSelected": true
    },
    {
      "pagId": 6099945,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_3.jpg",
      "pagNombre": "Pagina_3.jpg",
      "pagOrden": 3,
      "pagTamano": 180082,
      "isSelected": true
    },
    {
      "pagId": 6099946,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_4.jpg",
      "pagNombre": "Pagina_4.jpg",
      "pagOrden": 4,
      "pagTamano": 150928,
      "isSelected": true
    },
    {
      "pagId": 6099947,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_5.jpg",
      "pagNombre": "Pagina_5.jpg",
      "pagOrden": 5,
      "pagTamano": 169233,
      "isSelected": true
    },
    {
      "pagId": 6099948,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_6.jpg",
      "pagNombre": "Pagina_6.jpg",
      "pagOrden": 6,
      "pagTamano": 156130,
      "isSelected": true
    },
    {
      "pagId": 6099949,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_7.jpg",
      "pagNombre": "Pagina_7.jpg",
      "pagOrden": 7,
      "pagTamano": 58030,
      "isSelected": true
    },
    {
      "pagId": 6099950,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_8.jpg",
      "pagNombre": "Pagina_8.jpg",
      "pagOrden": 8,
      "pagTamano": 135816,
      "isSelected": true
    },
    {
      "pagId": 6099951,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_9.jpg",
      "pagNombre": "Pagina_9.jpg",
      "pagOrden": 9,
      "pagTamano": 166246,
      "isSelected": true
    },
    {
      "pagId": 6099952,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_10.jpg",
      "pagNombre": "Pagina_10.jpg",
      "pagOrden": 10,
      "pagTamano": 110896,
      "isSelected": true
    },
    {
      "pagId": 6099953,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_11.jpg",
      "pagNombre": "Pagina_11.jpg",
      "pagOrden": 11,
      "pagTamano": 155020,
      "isSelected": true
    },
    {
      "pagId": 6099954,
      "arcCod": "mKr6cA04lCzxPxUi7VHmiC36yEQ=",
      "urlPagi": "http://179.49.20.59/sadd/pagi/6D4B7236634130346C437A78507855693756486D694333367945513D/Pagina_12.jpg",
      "pagNombre": "Pagina_12.jpg",
      "pagOrden": 12,
      "pagTamano": 112065,
      "isSelected": true
    }
  ];

  base64Image: any;

  loadingDownload=false;


  constructor() {

  }

  ngOnInit() {
    let imageUrl = 'https://i.imgur.com/hdcbPeO.jpg';
    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
  }

  async createPdf() {
    //Inicializo documento pdf
    this.loadingDownload=true;
    const pdfDoc = await PDFDocument.create();
    for (var _i = 0; _i < 3069; _i++) {

      let jpgUrl = 'https://i.imgur.com/hdcbPeO.jpg';
      let jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer());
      let jpgImage = await pdfDoc.embedJpg(jpgImageBytes);

      const jpgDims = jpgImage.scale(0.5)

      let page = pdfDoc.addPage();
      page.drawImage(jpgImage, {
        x: page.getWidth() / 2 - jpgDims.width / 2,
        y: page.getHeight() / 2 - jpgDims.height / 2 + 250,
        width: jpgDims.width,
        height: jpgDims.height,
      });
    }
    const pdfBytes = await pdfDoc.save();
    this.downLoadFile(pdfBytes, 'application/pdf');
    this.loadingDownload=false;
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type });
    FileSaver.saveAs(blob, 'ejemplo.pdf');
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;  img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}

