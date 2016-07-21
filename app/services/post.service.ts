import {Injectable} from '@angular/core';
import { Headers, Http, Response} from '@angular/http';	
import 'rxjs/add/operator/toPromise';
import {Post} from '../interfaces/post.interface';
@Injectable()
export class PostService{
	private url = 'http://localhost:8080/toAngular2/public/api/courses';
	constructor(private http: Http){ }
	private extractData(res: Response) {
	  let body = res.json();
	  console.log(body);
	  return body || null;
	}
	getPosts(): Promise<Post[]>{
		return this.http.get(this.url)
			.toPromise()
			.then(this.extractData)
			.catch(this.handleError);
	}	
	private handleError(error: any) {
	  console.error('An error occurred', error);
	  return Promise.reject(error.message || error);
	}
}