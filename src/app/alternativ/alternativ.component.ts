import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alternativ',
  templateUrl: './alternativ.component.html',
  styleUrls: ['./alternativ.component.css']
})
export class AlternativComponent implements OnInit {
	pcPoeng = 0;
	dinaPoeng = 0;

	raekna(typ){
		var alt = ["sten","sax", "påse"];
		var pcAlt = Math.floor(Math.random() * Math.floor(alt.length));
		if(typ === alt[pcAlt]){
			this.dinaPoeng++;
			this.pcPoeng++;
		}else if(typ === "sten" && alt[pcAlt] === "sax"){
			this.dinaPoeng++;
		}else if(typ === "sten" && alt[pcAlt] === "påse"){
			this.pcPoeng++;
		}else if(typ === "sax" && alt[pcAlt] === "påse"){
			this.dinaPoeng++;
		}else if(typ === "sax" && alt[pcAlt] === "sten"){
			this.pcPoeng++;
		}else if(typ === "påse" && alt[pcAlt] === "sten"){
			this.dinaPoeng++;
		}else{
			this.pcPoeng++;
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
