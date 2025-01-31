import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
  protected _http: HttpClient;
  protected _apiPath: string = 'http://localhost:3333/';

  protected constructor(
    protected _pathResource: string,
    protected _injector: Injector
  ) {
    this._apiPath = `${this._apiPath}${this._pathResource}`;
    this._http = _injector.get(HttpClient);
  }

  protected getById(id: number):Observable<T>{
    return this._http.get<T>(`${this._apiPath}/${id}`);
  }

  protected getAll():Observable<T[]>{
    return this._http.get<T[]>(this._apiPath);
  }
}
