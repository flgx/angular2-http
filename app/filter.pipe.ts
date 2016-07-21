import {Pipe,PipeTransform} from '@angular/core';
import {Post} from './interfaces/post.interface';

@Pipe({name: 'filter'})
export class FilterArrayPipe{
	transform(value: any, args: string[]): any {
	
	let filter = args[0];

	if (filter && Array.isArray(value)) {
	let filterKeys = Object.keys(filter);
	return value.filter((item:any) => filterKeys.reduce((memo, keyName) =>
	memo && item[keyName].toLowerCase() === filter[keyName].toLowerCase(), true));
	} else {
	return value;
	}
	}
}	