import { Component } from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {FilterArrayPipe} from './filter.pipe';
import {MyComponent} from './components/my-component.component';
import {PostsComponent} from './components/posts.component';
import {PostService} from './services/post.service';
import {Http,HTTP_PROVIDERS} from '@angular/http';
@Component({
    selector: 'my-app',
    pipes:[FilterArrayPipe],
    providers:[PostService,HTTP_PROVIDERS],
    template: `
    	<h1 *ngIf="showHeading">My app with A2</h1>
    	<span [ngSwitch]="name">
			<span *ngSwitchCase="'Pako'">Pako</span>
			<span *ngSwitchCase="'Sam'">Sam</span>
			<span *ngSwitchCase="'Jeff'">Jeff</span>
			<span *ngSwitchDefault>Not here</span>
    	</span>
    	<br />
    	<br />
    	<ul>
    		<li *ngFor="let color of colors">
				{{color}}
    		</li>
    	</ul>
    	<button (click)="showIt()">{{buttonText}}</button>

    	<h1>Pipe Section</h1>
    	<hr />
    	<h2>My name: {{myname | uppercase}}</h2>
    	<h2>My name: {{myname | lowercase}}</h2>
    	<h2>My name: {{myname | replace:'Irons' : 'Slater'}}</h2>
    	<h2>My birdthday Format 1: {{birthday | date}}</h2>
    	<h2>My birdthday Format 2: {{birthday | date:'shortDate'}}</h2>
    	<h2>My birdthday Format 3: {{birthday | date:'longDate'}}</h2>
    	<h2>My birdthday Format 4: {{birthday | date:'shortTime'}}</h2>
    	<h2>My Price Format 1: {{price | currency:'USD'}}</h2>
    	<h2>My Price Format 2: {{price | currency:'GBP':'true'}}</h2>

    	<hr />
    	<h1>TODO (filtering search)</h1>
    	<input type="text" #listFilter (keyup)="0">
    	<ul>
			<li *ngFor = "let todo of todos | filter:listFilter.value">
				{{todo}}
			</li>
    	</ul>

    	<hr />
    	<posts></posts>
    `,
    directives: [MyComponent,PostsComponent]
    
})
export class AppComponent {
	private showHeading:boolean;
	private name:string;
	private buttonText:string;
	private colors:string[];
	private myname:string;
	private birthday:Date;
	private price:number;
	private todos:string[];
	constructor(){
		this.showHeading = true;
		this.name = 'Sams';
		this.buttonText="Hide Title";
		this.colors = ['Red','Blue','Green'];

		//pipes
		this.myname = 'Andy Irons';
		this.birthday= new Date(1960,3,15);
		this.price = 500;
		this.todos = ['Surfear','Comer','Volver a surfear','Programar'];

	}

	showIt(){
		if(this.showHeading == true){			
			this.showHeading=false;
			this.buttonText="Show Title";
		}else{
			this.showHeading=true;			
			this.buttonText="Hide Title";
		}
	}
}
