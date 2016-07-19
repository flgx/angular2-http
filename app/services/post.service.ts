import {Injectable} from '@angular/core';
import { Headers, Http, Response} from '@angular/http';	
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import {Post} from '../interfaces/post.interface';
@Injectable()
export class PostService{
	private url = 'myjson.json';
	constructor(private http: Http){ }
	private extractData(res: Response) {
	  let body = res.json();
	  console.log(body.data);
	  return body.data || null;
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