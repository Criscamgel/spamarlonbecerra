import { Injectable } from '@angular/core';
import { Cuota } from '../models/cuota';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { Constants } from '../models/constants';

@Injectable({
  providedIn: 'root'
})
export class CuotasService {
  private cuotas: Cuota[];
  public cuotasCargadas = false;

  constructor(private http: HttpClient) {
   }

   public set Cuotas(cuotas: Cuota[]) {
      this.cuotas = cuotas;
   }

   public get Cuotas(): Cuota[] {
     return this.cuotas;
   }

  getCuotas(): Observable<Cuota[]> {
    const params = new HttpParams().set('nombreAliado', Constants.ALIADO);
    return this.http.get<Cuota[]>(`${environment.backBdUrl}/consultarcuotas`, {params});
  }

}