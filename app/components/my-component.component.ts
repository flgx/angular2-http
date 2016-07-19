import { Component } from '@angular/core';

@Component({
	selector: 'my-component',
	template: 
	`
	<h1>{{title}}</h1>
	<img [src]="imageLink">
	<br />
	<button (click)="runClick()">Click</button>
	<br />
	<input type="text" [(ngModel)]="note" (keyup.enter)="saySomething($event)">
	{{note}}
	`
})

export class MyComponent{
	private title:string;
	private imageLink:string;

	constructor(){
		this.title = 'Keo kidd';
		this.imageLink = 'http://lorempixel.com/400/400';
	}

	runClick(){
		console.log('Youclickkk');
	}

	saySomething(e){
		console.log(e.target.value);
	}
}