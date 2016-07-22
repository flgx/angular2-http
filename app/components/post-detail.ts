import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Post} from '../interfaces/post.interface';
import { PostService } from '../services/post.service';
@Component({
  selector: 'my-post-detail',
  templateUrl: 'app/post-detail.component.html',
  styleUrls: ['app/post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Output() close = new EventEmitter();
  error: any;
  sub: any;
  navigated = false; // true if navigated here
  constructor(
    private postService: PostService,
    private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.postService.getPost(id)
            .then(post => this.post = post);
      } else {
        this.navigated = false;
        this.post = new Post();
      }
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  save() {
    this.postService
        .save(this.post)
        .then(post => {
          this.post = post; // saved post, w/ id if new
          this.goBack(post);
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
  goBack(savedPost: Post = null) {
    this.close.emit(savedPost);
    if (this.navigated) { window.history.back(); }
  }
}