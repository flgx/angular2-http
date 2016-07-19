import {Pipe} from '@angular/core';

@Pipe({name: 'filter'})
export class FilterArrayPipe{
transform(value: todos[], filter: string): todos[] { 
    filter = filter ? filter.toLocaleLowerCase() : null; 
    return filter ? value.filter((todo: todos) => 
        todo.toLocaleLowerCase().indexOf(filter) !== -1) : value; 
}
}