import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment.prod';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {

  private urlCuotas: string = environment.urls.backBdUrl;
  public cuotas: Cuota[];
  public observableCuotas: any;

  constructor(private http: HttpClient) {
    this.observableCuotas = new BehaviorSubject<Cuota[]>(this.cuotas);
   }

  getCuotas() {
    return this.http.get(`${this.urlCuotas}/consultarcuotas?nombreAliado=marlon_becerra`)
    .subscribe
       ((response: any) => {
         this.cuotas = response;
         this.eventChange();
      }
    ), retry(3), catchError(this.handleError);

  }

  eventChange() {
    this.observableCuotas.next(this.cuotas);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}