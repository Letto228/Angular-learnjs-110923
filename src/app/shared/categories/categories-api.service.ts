import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {ICategory} from './category.interface';

@Injectable({
    providedIn: 'root',
})
export class CategoriesApiService {
    constructor(private readonly http: HttpClient) {}

    loadCategories$(): Observable<ICategory[]> {
        return this.http.get<{data: ICategory[]}>(`/categories`).pipe(map(({data}) => data));
    }
}
