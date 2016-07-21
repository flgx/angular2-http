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
	save(post: Post): Promise<Post>  {
      return this.post(post);
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
	  let body = JSON.parse(res.json());
	  console.log(body);
	  return body;
	}
  	private post(post: Post): Promise<Post> {
	    let headers = new Headers({
      'Content-Type': 'application/json'});
	    return this.http
	               .post(this.url+'courses', JSON.stringify(post), {headers: headers})
	               .toPromise()
	               .then(this.postData)
	               .catch(this.handleError);
  	}

}