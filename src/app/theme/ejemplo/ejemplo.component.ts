import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { ISize } from 'selenium-webdriver';

@Component({
	selector: 'app-ejemplo',
	templateUrl: './ejemplo.component.html',
	styleUrls: [ './ejemplo.component.scss' ]
})
export class EjemploComponent implements OnInit {
	name = 'Angular 5';
	images = [
		{
			name: 'Image 1',
			url:
				'http://179.49.20.59/sadd/pagi/644F4B766A47454872734478305A4C6F2F697068693239697639733D/Pagina_1.jpg'
		},
		{
			name: 'Image 2',
			url: 'http://179.49.20.59/sadd/pagi/644F4B766A47454872734478305A4C6F2F697068693239697639733D/Pagina_2.jpg'
		}
	];
	ngOnInit() {}

	getBase64Image(img) {
		var canvas = document.createElement('canvas');
		console.log('image');
		canvas.width = img.width;
		canvas.height = img.height;
		var ctx = canvas.getContext('2d');
		ctx.drawImage(img, 0, 0);
		var dataURL = canvas.toDataURL('image/png');
		return dataURL;
	}

	//var base64 = (document.getElementById("imageid"));
	download() {
		// let doc = new jsPDF();
		// for (var i = 0; i < this.images.length; i++) {
		// 	let imageData = this.getBase64Image(document.getElementById('img' + i));
		// 	console.log(imageData);
		// 	doc.addImage(imageData, 'JPG', 10, (i + 1) * 10, 180, 150);
		// 	doc.addPage();
		// }
    // doc.save('Test.pdf');
    for (var i = 0; i < this.images.length; i++) {
      let imageData = this.getImgSize(this.images[i].url);
      console.log(imageData);
    }
    
  }
  
  getImgSize(imageSrc: string): Observable<ISize> {
    let mapLoadedImage = (event): ISize => {
        return {
            width: event.target.width,
            height: event.target.height
        };
    }
    var image = new Image();
    let $loadedImg = Observable.fromEvent(image, "load").take(1).map(mapLoadedImage);
    image.src = imageSrc;
    return $loadedImg;
}
}
