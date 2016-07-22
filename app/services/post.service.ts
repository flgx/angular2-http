import {Injectable} from '@angular/core';
import { Headers, Http, Response} from '@angular/http';	
import 'rxjs/add/operator/toPromise';
import {Post} from '../interfaces/post.interface';
@Injectable()
export class PostService{
	private url = 'http://localhost:8080/toAngular2/public/api/';
	constructor(private http: Http){ }
	getPosts(): Promise<Post[]>{
		return this.http.get(this.url+'courses')
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}
	getPost(id: number) {
	return this.getPosts()
	           .then(posts => posts.find(post => post.id === id));
	}	
	save(post: Post): Promise<Post>  {
	    if (post.id) {
	       	return this.put(post);
	    }
    	return this.post(post);
  	}
  	delete(post: Post) {
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let url = `${this.url}courses/${post.id}`;
	    return this.http
	               .delete(url, {headers: headers})
	               .toPromise()
	               .catch(this.handleError);
    }

	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
  	private extractData(res: Response) {
	  let body = res.json();
	  return body || null;
	}
  	private postData(res: Response) {
  	  console.log('here');
  	  console.log(res);
	  let body = res.json();
	  //console.log(body);
	  return body;
	}
	private put(post: Post) {
	    let headers = new Headers();
	    headers.append('Content-Type', 'application/json');
	    let url = `${this.url}courses/${post.id}`;
	    return this.http
	               .put(url, JSON.stringify(post), {headers: headers})
	               .toPromise()
	               .then(() => post)
	               .catch(this.handleError);
    }
  	private post(post: Post): Promise<Post> {
	    let headers = new Headers({
      'Content-Type': 'application/json'});
	    return this.http
	               .post(this.url+'courses', post, {headers: headers})
	               .toPromise()
	               .then(this.postData)
	               .catch(this.handleError);
  	}

}