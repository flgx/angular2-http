import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../interfaces/post.interface';

@Component({
	selector: 'posts',
	template: 
	`
    <h1>Posts</h1>
    <form (submit)="addPost()">
    	<label for="title">Title</label>
    	<input type="text" [(ngModel)]="title" />
    	<br />
    	<label for="body">Body</label>
    	<input type="text" [(ngModel)]="body" />
    	<br />
    	<input type="submit" value="Submit" />
    </form>
	<ul>
		<li *ngFor="let post of posts">
			{{1+1}}
			<h3>{{post.title}}</h3>
		</li>
	</ul>
	`,
})

export class PostsComponent implements OnInit{
	private posts:Post[];
	private title:string;
	private body:string;
	private newPost:Object;
    error: any;

	constructor(private _postService:PostService){}
	getPosts(){
		this._postService.getPosts().then(posts => this.posts = posts).catch(error => this.error = error);
	}
	ngOnInit() {		
    	this.getPosts();
    	console.log(this.posts);
 	}
	addPost(){
		this.newPost={
			title:this.title,
			body:this.body
		}
	}
}
