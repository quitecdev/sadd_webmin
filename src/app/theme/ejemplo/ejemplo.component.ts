import { Component, OnInit } from '@angular/core';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import * as FileSaver from 'file-saver';

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
  ]

   constructor() {

  }

  ngOnInit() {
  }

  async createPdf() {

    //Inicializo documento pdf
    const pdfDoc = await PDFDocument.create();
    // for (const pagina of this.paginaSelect) {
      let jpgUrl = 'http://lorempixel.com/400/200/';
      let jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
      let jpgImage = await pdfDoc.embedJpg(jpgImageBytes);
      console.log(jpgImage);
      // let jpgDims = jpgImage.scale(0.5);
      // let page = pdfDoc.addPage();
      // page.drawImage(jpgImage, {
      //   x: page.getWidth() / 2 - jpgDims.width / 2,
      //   y: page.getHeight() / 2 - jpgDims.height / 2 + 250,
      //   width: jpgDims.width,
      //   height: jpgDims.height,
      // });
    // }
    //const pdfBytes = await pdfDoc.save();
    //this.downLoadFile(pdfBytes, 'application/pdf')
  }

  downLoadFile(data: any, type: string) {
    var blob = new Blob([data], { type: type });
    FileSaver.saveAs(blob, 'ejemplo.pdf');
  }

}

