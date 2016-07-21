import { Component, OnInit,EventEmitter, Input,OnDestroy, Output } from '@angular/core';
import { Router }            from '@angular/router';
import {PostService} from '../services/post.service';
import {Post} from '../interfaces/post.interface';
import {FilterArrayPipe} from '../filter.pipe';

@Component({
	selector: 'posts',
	pipes:[FilterArrayPipe],
	template: 
	`
    <h1>Posts</h1>
    	<label for="name">Name</label>
    	<input type="text" [(ngModel)]="newPost.name" />
    	<br />
    	<label for="author">Author</label>
    	<input type="text" [(ngModel)]="newPost.author" />
    	<br />
    	<button (click)="save()">Save</button>
   	<br />

    <input type="text" #listFilter (keyup)="0">
	<ul>
		<li *ngFor="let post of posts">
			<h3>{{post.name}}</h3>
			<p>{{post.author}}</p>
		</li>
	</ul>
	`,
})

export class PostsComponent implements OnInit{
	private posts:Post[];
	private title:string;
	private body:string;
    error: any;
    @Input() newPost: Post;
  	@Output() close = new EventEmitter();
    sub: any;
    navigated = false; // true if navigated here

	constructor(private _postService:PostService){
		this.newPost = new Post();
	}
	getPosts(){
    this._postService.getPosts().then(posts => {
      this.posts = posts;
      console.log(this.posts); // not null
    }).catch(error => this.error = error);
	}
	
	ngOnInit() {		
    	this.getPosts();
    	console.log(this.posts);
 	}
    save() {
	    this._postService
	        .save(this.newPost)
	        .then(post => {
	          this.newPost = post; // saved post, w/ id if new
	        })
	        .catch(error => this.error = error); // TODO: Display error message
    }
    goBack(savedPost: Post = null) {
	    this.close.emit(savedPost);
	    if (this.navigated) { window.history.back(); }
    }
}
